"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { db } from '@/lib/db'
import { MockInterview } from '@/lib/schema'
import {v4 as uuidv4} from 'uuid'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import chatSession from '@/lib/GeminiAiModel'

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [loading, setLoading] = useState(false)

    const {user} = useUser()
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.target); // Create a FormData object from the form element
        const jobRole = formData.get("job_role"); // Get the value of the "job_role" input
        const jobDesc = formData.get("job_desc"); // Get the value of the "job_desc" textarea
        const experience = formData.get("experience"); // Get the value of the "experience" input

        // console.log("Job Role:", jobRole);
        // console.log("Job Description:", jobDesc);
        // console.log("Experience:", experience);

        // Add your form submission logic here
        const input_prompt = `Job position: ${jobRole}, Job Description: ${jobDesc}, Job Experience: ${experience}. Depending on this information give me 5 questions with answer in JSON format.`

     
        const result = await chatSession.sendMessage(input_prompt);
        const responseText_json = result.response.text();
        const responseText = responseText_json.replace('```json', '').replace('```', '');
        // console.log("Response:", responseText);

        if (responseText) {
            setLoading(false)
            const db_data = await db.insert(MockInterview).values({
                mockId: uuidv4(),
                jsonMockResp: responseText,
                jobPosition: jobRole,
                jobDesc: jobDesc,
                jobExperience: experience,
                createdBy: user?.primaryEmailAddress?.emailAddress,
                createdAt: new Date().toISOString().slice(0, 10),
            }).returning({mockId: MockInterview.mockId})
            
            // console.log("Inserted ID: ", db_data[0]?.mockId);
            setOpenDialog(false)
            router.push(`/dashboard/interview/${db_data[0].mockId}`)
        } else{
            setLoading(false)
            alert("Something went wrong. Please try again.")
        }
    }

    return (
        <div>
            <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md transition-all'
                onClick={() => setOpenDialog(true)}
            >
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-lg text-center">
                                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                                    <p className="mt-4 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                                        ipsa culpa autem, at itaque nostrum!
                                    </p>
                                </div>
                                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4 flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="job_role" className="sr-only">Job Role/Position</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 outline-none  rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                                placeholder="Senior Software Engineer"
                                                id="job_role"
                                                name="job_role"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="job_desc" className="sr-only">Job Description/Tech Stack in short</label>
                                        <div className="relative">
                                            <textarea
                                                rows={4}
                                                className="w-full px-3 py-2 outline-none  rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                                placeholder="Senior Software Engineer"
                                                id="job_desc"
                                                name="job_desc"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="experience" className="sr-only">Years of experience</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                max={80}
                                                className="w-full px-3 py-2 outline-none  rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                                placeholder="Years of experience"
                                                id="experience"
                                                name="experience"
                                            />
                                        </div>
                                    </div>
                                    <div className='flex gap-5 justify-end'>
                                        <Button variant="ghost" onClick={() => setOpenDialog(false)}>Cancel</Button>
                                        {loading ? <Button className='bg-primary' type="submit" disabled>Generating ...</Button> :

                                            <Button className='bg-primary' type="submit">Start Interview</Button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview

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
import { v4 as uuidv4 } from 'uuid'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import chatSession from '@/lib/GeminiAiModel'

const AddNewInterview = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [loading, setLoading] = useState(false)

    const { user } = useUser()
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
            }).returning({ mockId: MockInterview.mockId })

            // console.log("Inserted ID: ", db_data[0]?.mockId);
            setOpenDialog(false)
            router.push(`/dashboard/interview/${db_data[0].mockId}`)
        } else {
            setLoading(false)
            alert("Something went wrong. Please try again.")
        }
    }

    return (
        <div>
            <div className='p-3 md:p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md transition-all cursor-pointer'
                onClick={() => setOpenDialog(true)}
            >
                <h2 className='text-lg text-center'>+ Add New</h2>
            </div>
            <Dialog open={openDialog} onOpenChange={setOpenDialog} >
                    <DialogContent className=' '>
                        <DialogHeader>
                            <DialogTitle className=''>Add Interview</DialogTitle>
                            
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className=" mx-auto mb-0 mt-4 w-full space-y-4 flex flex-col gap-5">
                            <div className='items-start flex flex-col gap-1 w-full'>
                                <label htmlFor="job_role" className="text-black font-semibold">Job Role/Position</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 outline-none focus:outline-none border  rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white required:border-red-500"
                                    placeholder="Senior Software Engineer"
                                    id="job_role"
                                    name="job_role"
                                    required
                                />

                            </div>
                            <div className='items-start flex flex-col gap-1 text-left'>
                                <label htmlFor="job_desc" className="text-black font-semibold">Job Description/Tech Stack</label>
                                <textarea
                                    rows={4}
                                    className="focus:outline-none w-full px-3 py-2 outline-none  border rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Senior Software Engineer"
                                    id="job_desc"
                                    name="job_desc"
                                    required
                                />
                            </div>

                            <div className='items-start flex flex-col gap-1'>
                                <label htmlFor="experience" className="text-black font-semibold">Years of experience</label>

                                <input
                                    type="number"
                                    max={80}
                                    className="focus:outline-none w-full px-3 py-2 outline-none  rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="5"
                                    id="experience"
                                    name="experience"
                                    required
                                />
                            </div>

                            <div className='flex gap-5 justify-end'>

                                {loading ? <Button className='bg-primary' disabled>Generating ...</Button> :

                                    <Button className='bg-primary' type="submit">Start Interview</Button>
                                }
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>

        </div>
    )
}

export default AddNewInterview

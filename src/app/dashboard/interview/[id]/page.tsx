"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'
import { MockInterview } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";

const page = ({ params: { id } }: { params: { id: string } }) => {
    const [interviewData, setInterviewData] = useState<any>()
    const [webCamEnabled, setWebCamEnabled] = useState(false)
    useEffect(() => {

        getInterviewDetails();


    }, [])

    const getInterviewDetails = async () => {
        const res = await db.select().from(MockInterview).where(eq(MockInterview.mockId, id))
        // console.log(res);
        setInterviewData(res[0])

    }
    return (
        <div className='my-10'>
            <h2 className='text-3xl mb-5 uppercase font-semibold w-full text-center'>Let's Get Started</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <div className='flex flex-col my-5 gap-3'>
                    <div className='flex flex-col p-5 rounded-lg border gap-5'>
                        <h2 className=''><strong>Job Role/Job Position: </strong>{interviewData?.jobPosition}</h2>
                        <h2 className=''><strong>Job Description: </strong> {interviewData?.jobDesc}</h2>
                        <h2 className=''><strong>Job Experience: </strong> {interviewData?.jobExperience}</h2>
                    </div>
                    <div className='p-5 rounded-lg border-yellow-500 bg-yellow-200 border flex flex-col gap-4 text-yellow-600'>
                        <h2 className='flex gap-2 items-center'><Lightbulb /><strong>Information</strong></h2>
                        <h2>We never share your personal information. Your data is safe with us. Please allow us to access your webcam.</h2>
                    </div>
                </div>

                <div >
                    {webCamEnabled ?
                        <Webcam
                            mirrored
                            onUserMedia={() => setWebCamEnabled(true)}
                            onUserMediaError={() => setWebCamEnabled(false)}
                            style={{
                                height: 300,
                                width: 300
                            }}
                        /> :
                        <div className='flex flex-col items-center justify-center gap-3'>
                            <WebcamIcon className='h-72 w-full p-10 bg-secondary rounded-lg border' />
                            <Button className='w-full bg-slate-400 hover:bg-slate-500' onClick={() => setWebCamEnabled(true)}>Enable Webcam and Microphone</Button>
                        </div>
                    }
                </div>


            </div>
            <div className='flex justify-end items-end mt-5'>
                <Link href={`/dashboard/interview/${id}/start`}>
                    <Button>Start Interview</Button>
                </Link>
            </div>
        </div>
    )
}

export default page
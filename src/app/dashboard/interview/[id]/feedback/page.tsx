import { db } from '@/lib/db'
import { UserAnswer } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import React from 'react'
import Feedback from './_components/Feedback'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const getFeedback = async (id: string) => {
    const res = await db.select().from(UserAnswer).where(eq(UserAnswer.mockIdRef, id)).orderBy(UserAnswer.id);

    return res;
}


const page = async ({ params: { id } }: { params: { id: string } }) => {

    const feedbacks = await getFeedback(id);
    console.log(feedbacks);
    




    return (
        <div className='my-5'>
            <div className='flex flex-col gap-1'>

                <h1 className='text-xl md:text-2xl font-bold text-blue-600 font-sans'> Thank you for completing the interview. </h1>
                <h2 className='font-semibold text-gray-700'>Here's the interview feedback.</h2>
            </div>
            <h2 className='mt-3 font-bold'>Your overall rating is:<span className='text-primary'> 7/10</span></h2>

            <div className='mt-5 mb-10'>
                <Feedback feedbacks={feedbacks} />
            </div>
            <Link className=' px-4 py-2 rounded-lg bg-slate-300' href={'/dashboard'}>Go Home</Link>
        </div>
    )
}

export default page
"use client"

import { db } from '@/lib/db';
import { MockInterview } from '@/lib/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';




const InterviewList = () => {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState<any[]>([]);

    // console.log(user?.primaryEmailAddress?.emailAddress!);

    const getInterviewList = async () => {
        
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress!))
            .orderBy(desc(MockInterview.id));
        // console.log(result);
        setInterviewList(result);
    }

    useEffect(() => {
        getInterviewList();
        
    }, [user])

    return (
        <div>
            <h2 className='text-xl font-bold'>
                Interview List
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    interviewList?.map((interview, key) => {
                        return (
                            <div key={key}>
                                <InterviewItemCard interview={interview}/>
                            </div>
                        )
                    })
                }
                {
                    interviewList?.length == 0 && 
                    <div className='text-center text-gray-500'>
                        No interview found
                    </div>
                }
            </div>
        </div>
    )
}

export default InterviewList
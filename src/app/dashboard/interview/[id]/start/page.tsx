
"use client"
import { db } from '@/lib/db'
import { MockInterview } from '@/lib/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection'
import RecordAnswerSection from './_components/RecordAnswerSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = ({ params: { id } }: { params: { id: string } }) => {
  const [interviewData, setInterviewData] = useState<any>()
  const [mockInterviewQuestions, setMockInterviewQuestions] = useState<any>([])
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(1);

  useEffect(() => {

    getInterviewDetails();


  }, [])
  const getInterviewDetails = async () => {
    const res = await db.select().from(MockInterview).where(eq(MockInterview.mockId, id))
    // console.log(res);
    const jsonMockResp = JSON.parse(res[0].jsonMockResp)
    // console.log(jsonMockResp);

    setMockInterviewQuestions(jsonMockResp)
    setInterviewData(res[0])

  }

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* Questions  */}
        <QuestionSection mockInterviewQuestions={mockInterviewQuestions} activeQuestionIndex={activeQuestionIndex} />


        {/* Video */}
        <RecordAnswerSection mockInterviewQuestions={mockInterviewQuestions} activeQuestionIndex={activeQuestionIndex} id={id} />
      </div>
      <div className='flex items-center justify-end gap-5 mt-5'>
        {activeQuestionIndex > 0 && <Button onClick={()=> setActiveQuestionIndex(activeQuestionIndex -1)}>Previous Question</Button>}
        {activeQuestionIndex < mockInterviewQuestions.length - 1 && <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>}
        {activeQuestionIndex == mockInterviewQuestions.length - 1 && <Button><Link href={`/dashboard/interview/${id}/feedback`}>End Interview</Link></Button>}
      </div>
    </div>
  )
}

export default page
import Link from 'next/link'
import React from 'react'



const InterviewItemCard = ({interview}: any) => {
  return (
    <div className='border shadow-sm rounded-lg p-3 flex flex-col gap-1'>
        <h2 className='font-bold text-primary'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-gray-500'>{interview?.jobExperience} Years of Experience</h2>
        <h2 className='text-xs text-gray-500'>Created At: {interview?.createdAt}</h2>
        <div className='flex justify-between my-2 mt-2 gap-5'>
            <Link href={`/dashboard/interview/${interview?.mockId}/feedback`} className='p-2 text-sm bg-gray-200 rounded-lg w-full text-center'>Feedback</Link>
            <Link href={`/dashboard/interview/${interview?.mockId}`} className='p-2 text-sm bg-blue-500 text-white rounded-lg w-full text-center'>Start</Link>
        </div>
    </div>
  )
}

export default InterviewItemCard
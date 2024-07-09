import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

const page = () => {
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview />
      </div>
      <div>
        
        <InterviewList />
      </div>
    </div>
  )
}

export default page
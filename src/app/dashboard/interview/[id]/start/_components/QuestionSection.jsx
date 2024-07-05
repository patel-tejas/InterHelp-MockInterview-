import { Lightbulb } from 'lucide-react';
import React from 'react'

const QuestionSection = ({ mockInterviewQuestions, activeQuestionIndex }) => {
    // console.log(mockInterviewQuestions);
    return (
        <div className='p-5 border rounded-lg mt-5'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {mockInterviewQuestions.map((question, index) => {
                    return (
                        <h2 className={`p-2  rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex == index ? 'bg-primary text-white' : 'bg-secondary'} `}>Question #{index + 1}</h2>
                    )
                })}
            </div>
            <h2 className='my-5 text-sm md:text-lg'>{mockInterviewQuestions[activeQuestionIndex]?.question}</h2>
            <div className='border p-5 rounded-lg bg-slate-100 flex flex-col gap-4 '>
                <h2 className='flex gap-2 items-center text-primary'>
                    <Lightbulb />
                    <strong>Note</strong>
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, velit voluptatibus praesentium distinctio optio voluptas minus? Fugit possimus laboriosam consequuntur.</p>
            </div>
        </div>
    )
}

export default QuestionSection
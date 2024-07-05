import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type UserAnswer = {
    id: number
    mockIdRef: string
    question: string
    correctAns: string | null
    userAns: string | null
    feedback: string | null
    rating: string |  null
    userEmail: string
    createdAt: string | null
}

const Feedback = ({ feedbacks }: { feedbacks: UserAnswer[] }) => {
    return (
        <>
            {
                feedbacks.map((feedback: UserAnswer, idx) => {
                    return (
                        <Accordion type="single" collapsible>
                            <AccordionItem value={`item-${idx}`}>
                                <AccordionTrigger>{feedback.question}</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-1'>
                                        <p className=''>
                                            User Answer: {feedback.userAns}
                                        </p>
                                        <p>
                                            Correct Answer: {feedback.correctAns}
                                        </p>
                                    </div>
                                    <div className='mt-3 flex flex-col gap-1'>
                                        <h3 className='text-primary'>Feedback: {feedback.feedback}</h3>
                                        <p>Rating: {feedback.rating}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )
                })
            }

        </>
    )
}

export default Feedback
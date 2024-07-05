"use client"

import { Button } from '@/components/ui/button'
import { WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText, { ResultType } from 'react-hook-speech-to-text'
import { toast } from 'sonner'
import { ChatSession } from '@google/generative-ai'
import chatSession from '@/lib/GeminiAiModel'
import { UserAnswer } from '@/lib/schema'
import { db } from '@/lib/db'
import { useUser } from '@clerk/nextjs'

const RecordAnswerSection = ({ mockInterviewQuestions, activeQuestionIndex, id }: { mockInterviewQuestions: any, activeQuestionIndex: number, id: string}) => {
    const [answer, setAnswer] = useState<string>("")
    const {user} = useUser()

    
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
      
        results.map((result: any) => {
            setAnswer((prev: any) => prev + (result?.transcript || ""))
        })
      
      
    }, [results])
    
    const saveUserAnswer = async () => {
        if (isRecording) {
            stopSpeechToText()
            if (answer.length < 5) {
                toast.error("Please speak at least 5 words");
                return;
            }
            const feedbackPrompt = `Question: ${mockInterviewQuestions[activeQuestionIndex]?.question}, User Answer: ${answer}. Depending on question and user answer for given interview question, please provide rating for answer on scale of (1-10) and feedback where area of improvement is needed if any. Please give in 3-5 lines to imporve it in JSON format with rating field and feedback field.`

            const result = await chatSession.sendMessage(feedbackPrompt);
            const responseText_json = result.response.text();
            const responseTextJson = JSON.parse(responseText_json.replace('```json', '').replace('```', ''));
            
            const db_data = await db.insert(UserAnswer).values({
                mockIdRef: id,
                question: mockInterviewQuestions[activeQuestionIndex]?.question,
                correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer,
                userAns: answer,
                rating: responseTextJson?.rating!,
                feedback: responseTextJson?.feedback,
                createdAt: new Date().toISOString().slice(0, 10),
                userEmail: user?.primaryEmailAddress?.emailAddress!,
            }).returning({id: UserAnswer.id})
            
            if (db_data) {
                toast.success("Answer saved successfully")
                // console.log(db_data);
                setResults([])
                setAnswer("")
            }
        } else {
            startSpeechToText()
            setResults([])
            setAnswer("")
        }
    }

    return (
        <div className='mt-5 flex flex-col gap-5'>
            <div className='flex flex-col justify-center  items-center bg-black rounded-lg p-5'>
                <WebcamIcon width={200} height={200} className='absolute text-slate-300' />
                <Webcam
                    mirrored
                    style={{
                        height: 300,
                        width: "100%",
                        zIndex: 10,
                        borderRadius: "20px"
                    }}
                />
            </div>
            <div className='flex items-center justify-center gap-5'>
                <Button variant={'outline'} className={`w-max ${isRecording ? 'text-red-500' : ''}`} onClick={saveUserAnswer}>
                    {
                        isRecording ? "Stop Recording..." : "Start Recording"
                    }
                </Button>
            </div>
        </div>
    )
}

export default RecordAnswerSection
"use client";
import chatSession from '@/lib/ResumeModel';
import React, { useState, useRef } from 'react';
import pdfToText from "react-pdftotext";
import ResumeSummary from './ResumeSummary';
import PercentageMatch from './PercentageMatch';
import { IoCloudUploadOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

export type resumeSummaryType = {
    heading: string;
    strength: string[];
    weakness: string[];
    other: string[];
}

export type percentageSummaryType = {
    percentage: number;
    improvement_summary: string[];
    other: string[];
}

const UploadForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadingSummary, setUploadingSummary] = useState<boolean>(false);
    const [uploadingMatch, setUploadingMatch] = useState<boolean>(false);
    const [pdfText, setPdfText] = useState<string>('');
    const [resumeSummary, setResumeSummary] = useState<resumeSummaryType | null>(null);
    const [percentageSummary, setPercentageSummary] = useState<percentageSummaryType | null>(null);
    const [jobDescription, setJobDescription] = useState<string>('');

    const inputFileRef = useRef<HTMLInputElement>(null);

    const extractText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) {
            alert("Please select a file");
            return;
        }
        setFile(selectedFile);

        pdfToText(selectedFile)
            .then((text) => {
                setPdfText(text);
            })
            .catch((error) => console.error("Failed to extract text from pdf"));
    };

    const handleSummary = async () => {
        setUploadingSummary(true);
        const result = await chatSession.sendMessage(`You are an experienced Technical Human Resource Manager, your task is to review the provided resume against the job description. Please share your professional evaluation on whether the candidate's profile aligns with the role. Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements. Provided the job description: ${jobDescription} and resume: ${pdfText}. Return me the response in json format with keys {"heading": "contains 2-3 lines of overall view of resume if it matches or not", "strength": ["markdown list of strengths"], "weakness": ["markdown list of weaknesses"], "other": ["markdown list of other points"]}`);

        const res = await result.response.text();
        const responseText = res.replace('```json', '').replace('```', '');
        const json = JSON.parse(responseText);
        setResumeSummary(json);
        setUploadingSummary(false);
    };

    const handlePercentageMatch = async () => {
        setUploadingMatch(true);
        const result = await chatSession.sendMessage(`As an AI expert in resume evaluation, calculate the percentage match between the provided resume and the job description for a ${jobDescription}. Additionally, provide points that need to be improved in the resume to increase the match percentage, including key characters and skills that should be highlighted. Resume: ${pdfText}. Return me the response in json format with keys {"percentage": "percentage match between resume and job description in numbers", "improvement_summary": ["markdown list of points that need to be improved"], "other": ["markdown list or paragraph of other points"]}`);

        const res = await result.response.text();
        const responseText = res.replace('```json', '').replace('```', '');
        const json = JSON.parse(responseText);
        setPercentageSummary(json);
        setUploadingMatch(false);
    };

    const handleDivClick = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    return (
        <div className='flex flex-col gap-5 my-10 min-h-screen'>
            <div className='flex gap-5 flex-col'>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <label htmlFor="job_desc">Job Description</label>
                    <textarea
                        rows={4}
                        name="job_desc"
                        id='job_desc'
                        placeholder='This is a part-time hybrid role for a Flutter Developer at Overninja Technologies LLP in Vadodara. 
                        Qualifications:
Strong knowledge of Computer Science and Software Development principles
Experience in Back-End Web Development technologies like Node.js
'
                        className='border bg-white border-gray-300 p-2 w-full sm:w-[70%] rounded-lg h-[30vh] sm:h-[20vh] focus:outline-none'
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </div>
                <div className='flex gap-4 items-center flex-col sm:flex-row'>
                    <label htmlFor="file">Upload Resume: </label>
                    <div className='cursor-pointer w-full sm:w-[20%] h-[10vh] rounded-xl flex items-center justify-center bg-blue-100 border border-blue-600' onClick={handleDivClick}>
                        <input className='hidden' type="file" name="file" id='file' accept="application/pdf" onChange={extractText} ref={inputFileRef} />
                        {file ? <TiTick className='text-2xl text-green-500' /> : <IoCloudUploadOutline className='text-2xl' />}
                    </div>
                </div>
            </div>

            <div className='flex gap-4 flex-col sm:flex-row'>
                <button
                    className="bg-white hover:bg-blue-500 hover:text-white duration-300 border-blue-600 text-blue-600 outline-1 border font-semibold py-2 px-4 rounded-xl disabled:hover:bg-white disabled:text-gray-500"
                    onClick={handleSummary}
                    disabled={uploadingSummary || uploadingMatch || !file}
                >
                    {uploadingSummary ? "Generating Summary..." : "Generate Summary"}
                </button>
                <button
                    className="bg-white hover:bg-blue-500 hover:text-white duration-300 border-blue-600 text-blue-600 outline-1 border font-semibold py-2 px-4 rounded-xl disabled:hover:bg-white disabled:text-gray-500"
                    onClick={handlePercentageMatch}
                    disabled={uploadingSummary || uploadingMatch || !file}
                >
                    {uploadingMatch ? "Calculating Match..." : "Percentage Match"}
                </button>
            </div>
            <div className='flex flex-col gap-20 mt-10'>
                {resumeSummary && (
                    <ResumeSummary resumeSummary={resumeSummary} />
                )}
                {percentageSummary && (
                    <PercentageMatch percentageSummary={percentageSummary} />
                )}
            </div>
        </div>
    );
};

export default UploadForm;

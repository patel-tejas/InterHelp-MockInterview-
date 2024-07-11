import React from 'react';
import { resumeSummaryType } from './UploadForm';
import ReactMarkdown from 'react-markdown';

const ResumeSummary = ({ resumeSummary }: { resumeSummary: resumeSummaryType }) => {
    return (
        <div className="flex flex-col gap-3">
            <h2 className='text-xl font-bold sm:text-2xl md:text-3xl'>Resume Summary</h2>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl font-bold'>Overall View</h3>
                <p className='text-gray-700'>{resumeSummary.heading}</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl  text-green-700 font-bold'>Strengths</h3>
                <ReactMarkdown className="break-words text-gray-700">
                    {resumeSummary.strength.join('\n')}
                </ReactMarkdown>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl font-bold text-red-700'>Weaknesses</h3>
                <ReactMarkdown className="break-words text-gray-700">
                    {resumeSummary.weakness.join('\n')}
                </ReactMarkdown>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl font-bold text-blue-500'>Other Points</h3>
                <ReactMarkdown className="break-words text-gray-700">
                    {resumeSummary.other.join('\n')}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default ResumeSummary;

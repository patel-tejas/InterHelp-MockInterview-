import React from 'react';
import { percentageSummaryType } from './UploadForm';
import ReactMarkdown from 'react-markdown';

const PercentageMatch = ({ percentageSummary }: { percentageSummary: percentageSummaryType }) => {
    return (
        <div className="flex flex-col gap-3">
            <h2 className='text-xl font-bold sm:text-2xl md:text-3xl'>Percentage Match</h2>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl font-bold'>Match Percentage</h3>
                <p className='text-gray-700'>{percentageSummary.percentage}</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl text-green-700 font-bold'>Improvement Summary</h3>
                <ReactMarkdown className="break-words text-gray-700">
                    {percentageSummary.improvement_summary.join('\n')}
                </ReactMarkdown>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className='text-lg sm:text-xl font-bold text-blue-500'>Other Points</h3>
                <ReactMarkdown className="break-words text-gray-700">
                    {percentageSummary.other.join('\n')}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default PercentageMatch;

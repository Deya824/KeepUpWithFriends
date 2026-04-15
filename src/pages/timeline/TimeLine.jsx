import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineProvider/TimelineContext';

const TimeLine = () => {
    const { timeline } = useContext(TimelineContext);
    
    return (
        <div className="w-full">
           {timeline.length > 0 && (
                <div className='bg-gray-50 px-8 py-10 rounded-xl'>
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">Timeline</h2>
                    
                    <ul className="space-y-4">
                        {timeline.map(entry => (
                            <li key={entry.id} className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
                                
                                {/* Column 1: Icon */}
                                <div className='text-gray-700 mt-1 text-lg'>
                                    {entry.icon}
                                </div>
                                
                                {/* Column 2: Title and Date stacked */}
                                <div className='flex flex-col gap-1'>
                                    <span className="font-semibold text-gray-900 text-base">
                                        {entry.title}
                                    </span>
                                    <span className="text-gray-500 text-sm">
                                        {entry.date}
                                    </span>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TimeLine;
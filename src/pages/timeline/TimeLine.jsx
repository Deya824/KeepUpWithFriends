import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../context/TimelineProvider/TimelineContext';

const TimeLine = () => {
    const { timeline } = useContext(TimelineContext);
    
    const [filter, setFilter] = useState('All');

    const filteredTimeline = timeline.filter(entry => {
        if (filter === 'All') return true;
        return entry.title.startsWith(filter); 
    });
    
    return (
        <div className="w-full">
            <div className='bg-gray-50 px-8 py-10 rounded-xl'>
                <h2 className="mb-6 text-3xl font-bold text-slate-900">Timeline</h2>
              
                {timeline.length > 0 ? (
                    <>
                        <div className="mb-6 relative w-56">
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="w-full appearance-none bg-white border border-gray-100 text-gray-500 text-sm py-2.5 px-4 pr-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] focus:outline-none focus:ring-2 focus:ring-blue-100 cursor-pointer"
                            >
                                <option value="All">Filter timeline</option>
                                <option value="Call">Call</option>
                                <option value="Text">Text</option>
                                <option value="Video">Video</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        
                        {filteredTimeline.length > 0 ? (
                            <ul className="space-y-4">
                                {filteredTimeline.map(entry => (
                                    <li key={entry.id} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-lg shadow-sm">
                                        
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
                        ) : (
                            <div className="text-center py-8 bg-white border border-gray-100 rounded-lg shadow-sm text-gray-500">
                                No {filter.toLowerCase()} entries found.
                            </div>
                        )}
                    </>
                ) : (
                   
                    <div className="text-center py-12 bg-white border border-gray-100 rounded-lg shadow-sm text-gray-500 text-lg">
                        No data found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default TimeLine;
import React, { useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { TimelineContext } from '../../context/TimelineProvider/TimelineContext';

const Stats = () => {
    const { timeline } = useContext(TimelineContext);
    const safeData = timeline || [];

    // Replaced Tailwind class names with their actual Hex color codes
    const data = [
        { name: 'Call', value: safeData.filter(entry => entry.title?.startsWith('Call')).length, fill: '#14532d' }, // green-900
        { name: 'Text', value: safeData.filter(entry => entry.title?.startsWith('Text')).length, fill: '#86efac' }, // green-100
        { name: 'Video', value: safeData.filter(entry => entry.title?.startsWith('Video')).length, fill: '#581c87' } // purple-900
    ];

    return (
        <div className='mx-auto max-w-5xl py-5'>
            <h2 className='font-bold text-2xl'>Friends Analytics</h2>
            <div className='my-10 shadow py-10 rounded-md border border-gray-100 bg-white'>
                <h2 className='p-8 font-semibold'>By Interaction Type</h2>

                {/* Fixed the ternary operator syntax here */}
                {safeData.length > 0 ? (
                    <div style={{ width: '100%', maxWidth: '500px', height: '400px', margin: '0 auto' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="60%"
                                    outerRadius="80%"
                                    cornerRadius="50%"
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                    stroke="none"
                                />
                                <Legend />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <h2 className="text-center text-gray-500">No Interaction logged yet</h2>
                )}
            </div>
        </div>
    );
};

export default Stats;
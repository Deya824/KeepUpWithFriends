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
        <div className='container mx-auto'>
            <h2 className='font-bold text-xl'>Friends Analytics</h2>
            <div className='mt-4 my-10 shadow py-10 rounded-md border border-gray-100'>
                <h2 className='p-3 font-semibold'>By Interaction Type</h2>
                
                {/* ResponsiveContainer handles the fluid width and height automatically */}
                <div style={{ width: '100%', maxWidth: '500px', height: '400px', margin: '0 auto' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                innerRadius="60%" // Lowered slightly so the donut isn't too thin
                                outerRadius="80%" // Lowered from 100% so tooltips/legends fit inside the box
                                cornerRadius="50%"
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                                stroke="none" // Removes the default border around slices
                            />
                            <Legend />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
};

export default Stats;
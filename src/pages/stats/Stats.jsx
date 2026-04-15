import React from 'react';
import { PieChart } from 'recharts';

const Stats = () => {
    return (
        <div>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
        <RechartsDevtools />
    </PieChart>
        </div>
    );
};

export default Stats;
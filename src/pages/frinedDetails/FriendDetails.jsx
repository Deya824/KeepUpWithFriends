import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TimelineContext } from '../../context/TimelineProvider/TimelineContext';

import { FiPhone, FiMessageSquare, FiVideo } from 'react-icons/fi';

const FriendDetails = () => {
     const statusColors = {
        'overdue': 'bg-red-300 text-white',
        'almost due': 'bg-amber-300 text-white',
        'on-track': 'bg-green-300 text-white'
    };
     const [friends, setFriends] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
         fetch('/freinds.json')
             .then(res => res.json())
             .then(data => {
                 setFriends(data);
                 setIsLoading(false);
             })
             .catch(error => {
                 console.error("Failed to fetch friends:", error);
                 setIsLoading(false); 
             });
     }, []); 

     const {id}=useParams();
     const expectedFriend=friends.find(friend=>String(friend.id)===id);
     const {timeline,setTimeline}=useContext(TimelineContext);

     const handleCheckIn = (type) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options)
        const newEntry = {
            id: Date.now(),
            date: currentDate,
            icon: type==='Call' ? <FiPhone /> : type==='Text' ? <FiMessageSquare /> : <FiVideo />,
            title: `${type} with ${expectedFriend?.name}`
        };

        setTimeline([newEntry,...(timeline || [])]);
        toast.success(`${type} logged successfully!`);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className='mx-auto max-w-6xl flex gap-6 mt-10 px-4'>
            
            <ToastContainer position="top-center" autoClose={3000} />

             {/* LEFT COLUMN */}
             <div className="LeftColumn w-1/3 flex flex-col gap-4">

               
                 <div className="bg-white px-6 py-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center space-y-2">
                     <img src={expectedFriend?.picture} alt="" className="h-24 w-24 rounded-full object-cover" />
                     <h2 className="font-bold text-lg">{expectedFriend?.name}</h2>
                     <p className={`text-xs font-bold mt-3 uppercase tracking-wider px-3 py-1.5 rounded-md  ${statusColors[expectedFriend?.status]}`}>
                        {expectedFriend?.status}
                     </p>
                     <div className='flex flex-wrap gap-2 my-2'>
                        {expectedFriend?.tags && expectedFriend?.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className='bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full'
                            >
                                {tag}
                            </span>
                        ))}
                     </div>
                     <p className="text-center italic text-gray-500 text-sm">"{expectedFriend?.bio}"</p>
                     <p className="text-blue-600 text-sm mt-1">Preferred: {expectedFriend?.email}</p>
                 </div>

               
                 <div className="w-full flex flex-col gap-3">
                    <button className="bg-white shadow-sm border border-gray-100 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 flex justify-center items-center gap-2">
                        ⏰ Snooze 2 Weeks
                    </button>
                    <button className="bg-white shadow-sm border border-gray-100 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 flex justify-center items-center gap-2">
                        📦 Archive
                    </button>
                    <button className="bg-white shadow-sm border border-red-100 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 flex justify-center items-center gap-2">
                        🗑️ Delete
                    </button>
                 </div>
             </div>
             
             {/* RIGHT COLUMN */}
             <div className='RightColumn w-2/3 flex flex-col gap-6'>
                
                {/* 1. Stats Row */}
                <div className='grid grid-cols-3 gap-4'>
                    <div className='bg-white py-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-1'>
                        <p className='font-bold text-4xl text-gray-800'>{expectedFriend?.days_since_contact}</p>
                        <h2 className="text-gray-500 text-sm">Days Since Contact</h2>
                    </div>
                    <div className='bg-white py-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-1'>
                        <p className='font-bold text-4xl text-gray-800'>{expectedFriend?.goal}</p>
                        <h2 className="text-gray-500 text-sm">Goal (Days)</h2>
                    </div>
                    <div className='bg-white py-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center space-y-1'>
                        <p className='font-bold text-2xl text-gray-800'>{expectedFriend?.next_due_date || "Feb 27, 2026"}</p>
                        <h2 className="text-gray-500 text-sm mt-1">Next Due</h2>
                    </div>
                </div>
                
                {/* 2. Relationship Goal */}
                <div className='bg-white px-8 py-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center'>
                    <div>
                        <p className="text-gray-500 text-sm font-semibold mb-1">Relationship Goal</p>
                        <p className='text-gray-800'>Connect every <span className='font-bold'>{expectedFriend?.goal} days</span></p>
                    </div>
                    <button className="border border-gray-200 text-sm font-medium px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">Edit</button>
                </div>
                
                {/* 3. Quick Check-In */}
                <div className='bg-white px-8 py-6 rounded-xl shadow-sm border border-gray-100'>
                    <h2 className="mb-4 text-gray-500 text-sm font-semibold">Quick Check-In</h2>
                    <div className="flex gap-4">
                        <button onClick={() => handleCheckIn('Call')} className="border border-gray-100 shadow-sm py-6 flex-1 flex flex-col items-center gap-2 rounded-xl hover:bg-gray-50 transition-colors text-gray-700">
                            <FiPhone className="text-2xl" />
                            <span className="text-sm font-medium">Call</span>
                        </button>
                        <button onClick={() => handleCheckIn('Text')} className="border border-gray-100 shadow-sm py-6 flex-1 flex flex-col items-center gap-2 rounded-xl hover:bg-gray-50 transition-colors text-gray-700">
                            <FiMessageSquare className="text-2xl" />
                            <span className="text-sm font-medium">Text</span>
                        </button>
                        <button onClick={() => handleCheckIn('Video')} className="border border-gray-100 shadow-sm py-6 flex-1 flex flex-col items-center gap-2 rounded-xl hover:bg-gray-50 transition-colors text-gray-700">
                            <FiVideo className="text-2xl" />
                            <span className="text-sm font-medium">Video</span>
                        </button>
                    </div>
                </div>

             </div>
             
        </div>
    );
};

export default FriendDetails;
import React from 'react';
import { Link } from 'react-router';

const Card = ({friend}) => {
    const statusColors = {
        'overdue': 'bg-red-300 text-white',
        'almost due': 'bg-amber-300 text-white',
        'on-track': 'bg-green-600 text-white'
    };
    return (
        <Link to={`/${friend.id}`} className='"bg-white px-6 py-8 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-200 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 space-y-2'>


            
        <img c src={friend.picture} alt={friend.name}  className='h-20 w-20 rounded-full object-cover ' />
        <h2 className='font-bold'>{friend.name}</h2>
        <p>{friend.days_since_contact}d ago</p>
      <div className='flex flex-wrap justify-center gap-2 my-2'>
                {friend.tags && friend.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className='bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full'
                    >
                        {tag}
                    </span>
                ))}
            </div>
        <p className={`text-xs font-bold mt-3 uppercase tracking-wider px-3 py-1.5 rounded-md  ${statusColors[friend.status]}`}>
                {friend.status}
            </p>
  
        </Link>
    );
};

export default Card;
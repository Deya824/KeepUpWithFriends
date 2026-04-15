import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Card from './Card';
import { ClipLoader } from 'react-spinners';

const HomePage = () => {
    const [friends, setFriends] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch the data
        fetch('/freinds.json')
            .then(res => res.json())
            .then(data => {
                
                setTimeout(() => {
                    setFriends(data);
                    setIsLoading(false);
                }, 1000); 
            })
            .catch(error => {
                console.error("Failed to fetch friends:", error);
                setIsLoading(false); 
            });
    }, []); 

    return (
        <div>
            <Banner />
            <div className='mx-auto max-w-5xl py-8'>
                <h2 className='text-2xl mb-4'>Your Friends</h2>
                
                {isLoading ? (
                    <div className='flex justify-center items-center h-48'>
                        <ClipLoader color="#36d7b7" size={50} aria-label="Loading Spinner" />
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {friends.map(friend => (
                            <Card key={friend.id} friend={friend} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
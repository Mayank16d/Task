'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

type Event = {
    _id: string;
    title: string;
    banner: string;
    description: string;
    location: string;
    maxUsers: number;
    dateTime: string;
    host: string;
  };

function page() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const [events, setEvents] = useState<Event[]>([]);

    const handleRegister = () => {
        // Retrieve the user ID from localStorage
        const userId = localStorage.getItem('id');
        if (!userId) {
          alert('You must be logged in to register for events.');
          return;
        }
    
        // Send the user ID to your backend
        axios.post('/api/registerForEvent', { userId, eventId: params.id })
          .then(response => {
            console.log('Registration successful', response);
            alert('You have successfully registered for the event!');
          })
          .catch(error => {
            console.error('Registration failed', error);
            alert('Failed to register for the event.');
          });
      };
    
    useEffect(() => {
        axios.get('/api/getEvents').then(response => {
          console.log(response); // Logging the response data
          setEvents(response.data);
        });
      }, []);
      const event = events.find(event => event._id === params.id);

      return (
       <>
       <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{event?.title}</h2>
        
        {/* <div className="mb-4">
            <img src={event?.banner} alt="Event Banner" className="w-full h-auto rounded-lg"/>
        </div> */}

        <div className="mb-4">
            <p className="block text-gray-700 text-sm font-bold mb-2">Description:</p>
            <span className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{event?.description}</span>
        </div>

        <div className="mb-6">
            <p className="block text-gray-700 text-sm font-bold mb-2">Location:</p>
            <span className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{event?.location}</span>
        </div>
        <div>
        <p className="block text-gray-700 text-sm font-bold mb-2">MaxUser:</p>
            <span className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{event?.maxUsers}</span>
        </div>
        <div>
        <p className="block text-gray-700 text-sm font-bold mb-2">dateTime:</p>
            <span className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{event?.dateTime}</span>
        </div>
        
        <div>
        <p className="block text-gray-700 text-sm font-bold mb-2">host:</p>
            <span className="w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{event?.host}</span>
        </div>
        <div>
            <button className= 'bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-xl mt-4'  onClick={handleRegister}>Register</button>
        </div>
        </div>
       </>
      );
}

export default page
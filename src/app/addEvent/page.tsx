'use client'
import React, { useState } from 'react';
import axios from 'axios';

function Page() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [maxUsers, setMaxUsers] = useState(0);
  const [dateTime, setDateTime] = useState('');
  const [host, setHost] = useState('');
  const [banner, setBanner] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
        // eventData.dateTime = new Date(eventData.dateTime); 
      const response = await axios.post('/api/addEvent',{ title,banner,
      description,
      location,
      maxUsers,
      dateTime,
      host});
      console.log(response.data); 
      alert(response.data.message);
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      // Handle error
    }
  };

  return (
    <div className="p-5 shadow-xl">
      <h1 className="text-2xl font-bold mb-4">Add Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="description" className="block">Description</label>
          <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="location" className="block">Location</label>
          <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="maxUsers" className="block">Max Users</label>
          <input type="number" id="maxUsers" name="maxUsers" value={maxUsers} onChange={(e) => setMaxUsers(Number(e.target.value))} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="dateTime" className="block">Date & Time</label>
          <input type="datetime-local" id="dateTime" name="dateTime" value={dateTime} onChange={(e) => setDateTime(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
            <label htmlFor="host" className="block">Host</label>
            <input type="text" id="host" name="host" value={host} onChange={(e) => setHost(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <div>
            <label htmlFor="banner" className="block">Banner/ Image Link</label>
            <input type="text" id="banner" name="banner" value={banner} onChange={(e) => setBanner(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default Page;
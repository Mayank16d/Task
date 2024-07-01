'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleSignUp = async (event:any) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      await axios.post('/api/signUp', { username, email, password, isAdmin});
      router.replace('/signIn'); // Redirect to signIn page on success
    } catch (error) {
      console.error('There was an error signing up:', error);
      // Handle errors here, such as displaying a message to the user
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignUp}>
          <h1 className="text-3xl text-center mb-4">Sign Up</h1>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isAdmin">
              Admin Account (If you want to create the event then check this box)
            </label>
            <input className="mr-2 leading-tight" id="isAdmin" type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
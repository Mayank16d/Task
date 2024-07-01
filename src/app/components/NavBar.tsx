'use client'
import { set } from 'mongoose';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setHasToken(!!token);
    setIsAdmin(localStorage.getItem('isAdmin') === 'true');
  }, []);
  

  return (
    <div className='flex justify-between items-center px-4 bg-purple-800 py-5 rounded-lg text-xl'>
      <div className={`md:w-1/2 ${!isMenuOpen ? 'block' : 'hidden'}`}>
      {/* <img src="" alt="LOGO" /> */}
      <h1 className='text-3xl font-bold text-cyan-500'>Event <span className=' text-orange-500'> Management</span></h1>
      </div>
      
      {/* Menu button for smaller screens */}
      <div className='md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>

      {/* Links for larger screens */}
      <div className={`flex-grow md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'}`}>

        <ul className='flex flex-col md:flex-row justify-between gap-5 items-center font-bold text-gray-300'>
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/Event"}>Event</Link></li>
          <li><Link href={"/About"}>About</Link></li>
        </ul>
        <div className={`flex flex-col justify-between md:flex-row gap-3 text-lg  items-center`}>
          <div>
            {isAdmin &&(
            <Link href="/addEvent"className='bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-full'>Add Event</Link>
            )}
          </div>
          <div>
        {!hasToken ? (
          <Link href="/signIn" className='bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-full'>Login/Signup</Link>
          
        ) : (
          <Link href="/Profile" className='bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-full'>Profile</Link>
        )}
      </div>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;
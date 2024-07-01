'use client'
import React from 'react';
// import { useRouter } from 'next/router'; // Import useRouter hook from next/router

function Page() {
//   const router = useRouter(); // Initialize useRouter hook

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage
    // router.push('/signIn'); // Redirect to /signIn page
  };

  return (
    <div className='flex mt-10 justify-center items-center'>
      <button onClick={handleLogout} className=' justify-center items-center bg-blue-600 p-4 rounded-lg text-white'>Logout</button> {/* Logout Button */}
    </div>
  );
}

export default Page;
import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl p-5 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          This is a website for event announcements. We aim to provide a comprehensive platform where users can find, share, and discuss upcoming events. Whether you're looking for concerts, conferences, or community gatherings, our goal is to connect people with events that match their interests and passions.
        </p>
      </div>
    </div>
  );
}

export default Page;
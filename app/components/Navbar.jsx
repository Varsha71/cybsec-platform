// components/Navbar.jsx
import React from 'react';

const Navbar = ({ setContentToShow }) => {
  return (
    <nav className='fixed top-0 left-0 w-full text-white z-30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center h-16'>
          <div className='flex items-center'>
            <button onClick={() => setContentToShow('quiz')} className='px-3 py-2 rounded-md text-xl font-medium'>Start Quiz</button>
            <button onClick={() => setContentToShow('leaderboard')} className='ml-4 px-3 py-2 rounded-md text-xl font-medium'>Leaderboard</button>
            <button onClick={() => setContentToShow('progress')} className='ml-4 px-3 py-2 rounded-md text-xl font-medium'>User Progress</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

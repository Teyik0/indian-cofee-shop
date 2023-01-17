import React from 'react';

const HeroBanner = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-image w-full min-h-[540px] object-fill text-white'>
      <h2 className='flex justify-center items-center text-7xl font-bold italic mt-24 font-caveat'>
        Bienvenu
      </h2>
      <h2 className='text-5xl font-bold font-caveat'>Au</h2>
      <h1 className='text-7xl font-bold tracking-wider text-center font-samarkan'>
        Indian Coffee
      </h1>
      <h2 className='text-7xl font-bold font-caveat'>Restaurant</h2>
      <button
        className='rounded-xl mt-12 pl-8 pr-8 pt-4 pb-4 bg-white text-black 
      font-bold border-1 border-gray-800'
      >
        Voir menu
      </button>
    </section>
  );
};

export default HeroBanner;

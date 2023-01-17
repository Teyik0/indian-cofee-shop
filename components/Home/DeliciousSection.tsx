import React from 'react';

const DeliciousSection = () => {
  return (
    <section className='pt-16 pb-16 flex flex-col justify-center items-center'>
      <h2 className='text-[#C6AB71] text-7xl font-caveat text-center'>
        Des menus délicieux
      </h2>
      <p className='w-full pr-2 pl-2 sm:p-0 sm:w-[400px] text-center mt-4 text-white font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        nulla sunt iste dolor ad autem blanditiis illo pariatur debitis
        assumenda eum quam dolore minima, accusantium et adipisci hic
        necessitatibus quidem expedita. Alias quos consequuntur eveniet adipisci
        itaque architecto quasi fugit id voluptate animi, saepe neque deserunt
        provident soluta reprehenderit dolorum.
      </p>
      <button
        className='rounded-xl mt-8 pl-8 pr-8 pt-4 pb-4 bg-white text-black 
      font-bold border-1 border-gray-800'
      >
        Voir menu
      </button>
    </section>
  );
};

export default DeliciousSection;

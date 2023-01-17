import React from 'react';

const DescBanner = () => {
  return (
    <section className='bg-image2 flex flex-col justify-center items-center bg-image w-full min-h-[640px] object-fill text-white'>
      <h2 className='text-6xl sm:text-7xl font-caveat text-[#C6AB71] text-center font-bold'>
        Un restaurant
        <br />
        indien authentique
      </h2>
      <p className='w-full pl-2 pr-2 sm:p-0 sm:w-[400px] mt-8 text-center font-semibold text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        porro excepturi placeat, ratione esse vitae sit atque explicabo, sunt
        accusantium neque! Dignissimos, qui. Eos pariatur voluptatem commodi
        sequi eaque neque iste laudantium! Pariatur aspernatur fugit cum vel nam
        eos est, at quibusdam voluptatem placeat in autem eaque dolorem iure
        veniam.
      </p>
    </section>
  );
};

export default DescBanner;

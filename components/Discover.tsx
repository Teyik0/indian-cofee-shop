import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Discover = () => {
  return (
    <section className='flex flex-row w-full justify-evenly pt-24 pb-24'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-[#C6AB71] text-6xl font-caveat'>
          Découvrir
          <br />
          l'histoire
        </h2>
        <p className='text-white text-lg w-[500px] mt-4 text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          veritatis accusantium dolore laudantium quibusdam placeat officiis eum
          deleniti eius rem doloremque quaerat animi molestias, aliquid
          consequuntur nemo atque esse delectus ratione, mollitia maxime
        </p>
        <Link href='/contact'>
          <p
            className='uppercase underline text-lg text-[#C6AB71] hover:text-white duration-300 ease-in-out
           font-bold italic tracking-wider mt-4'
          >
            à propos
          </p>
        </Link>
      </div>
      <Image
        src='/Le-butter-chicken.jpg'
        alt='butter-chicken'
        width={600}
        height={50}
        className='rounded-xl shadow-2xl'
      />
    </section>
  );
};

export default Discover;

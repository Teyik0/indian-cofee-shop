import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='fixed z-10 flex flex-row justify-around items-center w-full'>
      <Image
        src='/IndianCoffee_Logo.png'
        alt='Indian Coffee'
        width={150}
        height={150}
      />
      <div className='flex flex-row justify-center text-xl font-semibold'>
        {[
          { name: 'Home', link: '/' },
          { name: 'Menu', link: '/menu' },
          { name: 'Gallerie', link: '/gallerie' },
          { name: 'Contact', link: '/contact' },
        ].map((item) => (
          <Link href={item.link}>
            <h3 className='mr-8 ml-8 text-[#af9065] pt-2 pb-2 hover:text-white duration-300 ease-in-out'>
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

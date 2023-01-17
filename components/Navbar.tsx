import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className='hidden fixed z-10 sm:flex flex-row justify-between md:justify-around items-center w-full'>
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
              <h3 className='mr-4 ml-4 md:mr-8 md:ml-8 text-[#af9065] pt-2 pb-2 hover:text-white duration-300 ease-in-out'>
                {item.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      <div
        className='sm:hidden flex flex-end fixed'
        onClick={() => setMenu((prev) => !prev)}
      >
        <MdRestaurantMenu className='text-5xl text-[#af9065] ml-4 mt-4' />
        {menu && (
          <div className='bg-gray-800 rounded-xl pr-4 pl-4 flex flex-wrap ml-4 mt-4 gap-4 items-center justify-center'>
            {[
              { name: 'Home', link: '/' },
              { name: 'Menu', link: '/menu' },
              { name: 'Gallerie', link: '/gallerie' },
              { name: 'Contact', link: '/contact' },
            ].map((item) => (
              <Link href={item.link}>
                <h3
                  className='text-[#af9065] hover:text-white 
                duration-300 ease-in-out font-semibold'
                >
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

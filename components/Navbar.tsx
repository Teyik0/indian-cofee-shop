import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdRestaurantMenu } from 'react-icons/md';
import Router, { useRouter } from 'next/router';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [carte, setCarte] = useState(false);
  const root = useRouter();
  useEffect(() => {
    if (root.asPath.includes('/menu/')) setCarte(true);
    else setCarte(false);
  }, [root.asPath]);
  return (
    <>
      <div
        className={`hidden absolute sm:flex flex-row justify-between z-[300]
        ${
          !carte ? 'md:justify-around' : 'md:justify-start'
        } items-center w-full`}
      >
        <Link href='/'>
          <Image
            src='/IndianCoffee_Logo.png'
            alt='Indian Coffee'
            width={150}
            height={150}
          />
        </Link>
        <div className='flex flex-row justify-center text-2xl font-semibold'>
          {[
            { name: 'Accueil', link: '/' },
            { name: 'Menu', link: '/menu' },
            { name: 'Gallerie', link: '/gallerie' },
            { name: 'Contact', link: '/contact' },
          ].map((item) => (
            <Link href={item.link}>
              <h3
                className={`mr-4 ml-4 md:mr-8 md:ml-8 ${
                  root.asPath === item.link ? 'text-[#775e28]' : 'text-white'
                }
                 pt-2 pb-2 hover:text-[#775e28] duration-300 ease-in-out`}
              >
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
        <MdRestaurantMenu className='text-5xl text-[#775e28] ml-4 mt-4' />
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
                  className={`${
                    root.asPath === item.link ? 'text-[#775e28] ' : 'text-white'
                  } hover:text-[#775e28] 
                duration-300 ease-in-out font-semibold`}
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

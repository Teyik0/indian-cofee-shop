import Image from 'next/image';
import Link from 'next/link';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='flex flex-col bg-[#2a2a2a] pt-12 pb-12'>
      <div className='flex flex-col sm:flex-row items-center justify-evenly text-white text-4xl'>
        <Link href='/'>
          <Image
            src='/IndianCoffee_Logo.png'
            alt='Indian Coffee'
            width={150}
            height={150}
          />
        </Link>

        <div className='flex text-lg gap-8 text-white font-semibold mt-4 sm:mt-0'>
          <Link href='/'>
            <h4 className='hover:text-[#775e28] duration-300 ease-in-out'>
              Accueil
            </h4>
          </Link>
          <Link href='/menu'>
            <h4 className='hover:text-[#775e28] duration-300 ease-in-out'>
              Menu
            </h4>
          </Link>
          <Link href='/gallerie'>
            <h4 className='hover:text-[#775e28] duration-300 ease-in-out'>
              Gallerie
            </h4>
          </Link>
          <Link href='/contact'>
            <h4 className='hover:text-[#775e28] duration-300 ease-in-out'>
              Contact
            </h4>
          </Link>
        </div>

        <div className='flex flex-row gap-2 mt-8 sm:mt-0'>
          <Link
            href='https://www.facebook.com/profile.php?id=100083047666745'
            target='_blank'
          >
            <AiFillFacebook className='hover:text-gray-400 cursor-pointer' />
          </Link>
          <Link
            href='https://www.instagram.com/indiancoffee77/'
            target='_blank'
          >
            <AiFillInstagram className='hover:text-gray-400 cursor-pointer' />
          </Link>
        </div>
      </div>

      <div className='h-[1px] bg-gray-600 w-[320px] sm:w-[500px] lg:w-[800px] m-auto mt-4 mb-4' />
      <span className='text-center text-white'>
        ©INDIAN COFFEE, 2023. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

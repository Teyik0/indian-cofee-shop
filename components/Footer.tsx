import Image from 'next/image';
import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div
        className='flex flex-col justify-between m-auto mt-0 md:mt-8
            xl:w-[1200px] lg:w-[1000px] md:w-full'
      >
        <div className='flex md:flex-row flex-col justify-center items-center bg-gray-800 lg:rounded-t-3xl p-4'>
          <Link href='https://www.connectinnov.com/' target='_blank'></Link>
          <div className='flex flex-col mt-4 md:mt-0'>
            <h4 className='font-semibold text-white text-center text-xl'>
              Retrouvez toute notre actualité sur les réseaux sociaux
            </h4>
            <div className='flex flex-row items-center justify-center text-white text-4xl mt-4'>
              <AiFillFacebook className='mr-4 hover:text-gray-400 cursor-pointer' />
              <AiFillTwitterCircle className='mr-4 hover:text-gray-400 cursor-pointer' />
              <AiFillInstagram className='mr-4 hover:text-gray-400 cursor-pointer' />
              <AiFillLinkedin className='mr-4 hover:text-gray-400 cursor-pointer' />
            </div>
          </div>
        </div>

        <div
          className='flex xl:flex-row flex-col flex-wrap justify-between items-center bg-gray-600 p-4 lg:p-8
         text-white font-semibold md:text-lg text-sm'
        >
          <h4 className='cursor-pointer mr-4 hover:text-blue-200 xl:mt-0 mt-2'>
            2022 - Tous droits reservés
          </h4>
          <h4 className='cursor-pointer mr-4 capitalize hover:text-blue-200 xl:mt-0 mt-2'>
            8 Impasse de l'orée du bois, 77176 SAVIGNY LE TEMPLE
          </h4>
          <h4 className='cursor-pointer mr-4 hover:text-blue-200 xl:mt-0 mt-2'>
            Mentions légales
          </h4>
          <h4 className='first-letter:capitalize mr-4 cursor-pointer hover:text-blue-200 xl:mt-0 mt-2'>
            à propos
          </h4>
          <h4 className='cursor-pointer mr-4 hover:text-blue-200 xl:mt-0 mt-2'>
            Contact
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

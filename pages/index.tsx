import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFacebook, BsInstagram, BsTelephone } from 'react-icons/bs';

export default function Home() {
  const [info, setInfo] = useState(3);
  const router = useRouter();

  const handleClick = (number: number) => {
    if (number === 1) setInfo(1);
    else if (number === 2) setInfo(2);
    else if (number === 3) setInfo(3);
  };
  return (
    <>
      <Head>
        <title>
          Accueil | Indian Coffee - Fast food indien à Savigny le Temple
        </title>
        <meta
          property='og:title'
          content='Accueil | Indian Coffee - Restaurant fast food indien à Savigny le Temple'
        />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='Indian Coffee est un Restaurant fast food indien à Savigny le Temple'
        />
        <meta
          property='og:description'
          content="L'Indian Coffee est un Restaurant fast food indien à Savigny le Temple, nous proposons également des plats à emporter."
        />
        <meta property='og:locale' content='fr' />
        <meta property='og:locale:alternate' content='en' />
        <meta property='og:type' content='website' />
        <meta
          property='article:publisher'
          content='https://www.facebook.com/profile.php?id=100083047666745'
        />
        <meta property='og:url' content='https://indian-cofee.netlify.app/' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <section className='flex flex-col h-[100vh] w-full items-center justify-center bg-image'>
        <div className='relative bottom-48 md:bottom-64'>
          <Image
            src='/IndianCoffee_Logo.png'
            width={200}
            height={200}
            alt='logo'
            className='md:hidden'
          />
          <Image
            src='/IndianCoffee_Logo.png'
            width={300}
            height={300}
            alt='logo'
            className='hidden md:block'
          />

          <h1
            className='text-6xl md:text-8xl text-white font-normal font-samarkan text-center cursor-pointer
            hover:text-gray-400 duration-500'
            onClick={() => router.push('/menu')}
          >
            Menu
          </h1>
        </div>
        <div className='flex flex-col text-white bottom-0 absolute mb-4 left-0'>
          <p className='uppercase text-sm font-semibold mb-4 w-1/2 ml-4 md:text-xl md:w-3/4'>
            8 IMPASSE DE L'ORÉE DU BOIS 77176 SAVIGNY LE TEMPLE
          </p>
          <div className='flex flex-row ml-4 items-center'>
            <BsInstagram
              className='text-[#d5b130] text-5xl md:text-7xl mr-4 cursor-pointer'
              onClick={() => handleClick(1)}
            />
            {info === 1 && (
              <Link href='https://www.instagram.com/indiancoffee77/'>
                <div className='mr-4 p-2 bg-[#333] rounded-xl text-sm md:text-xl'>
                  <p className='uppercase font-semibold'>Notre Instagram</p>
                  <p className='text-center'>indiancofee77</p>
                </div>
              </Link>
            )}
            <BsFacebook
              className='text-[#d5b130] text-5xl md:text-7xl mr-4 cursor-pointer'
              onClick={() => handleClick(2)}
            />
            {info === 2 && (
              <Link href='https://www.facebook.com/profile.php?id=100083047666745'>
                <div className='mr-4 p-2 bg-[#333] rounded-xl text-sm md:text-xl'>
                  <p className='uppercase font-semibold'>Notre Facebook</p>
                  <p className='capitalize text-center'>Indian Cofee</p>
                </div>
              </Link>
            )}
            <BsTelephone
              className='text-[#d5b130] text-5xl mr-4 cursor-pointer md:text-7xl'
              onClick={() => handleClick(3)}
            />
            {info === 3 && (
              <div className='mr-4 p-2 bg-[#333] rounded-xl text-sm md:text-xl'>
                <p className='uppercase font-semibold'>Nous contacter</p>
                <p className='capitalize text-center'>+33 (0)1 60 63 54 97</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

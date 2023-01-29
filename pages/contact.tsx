import Head from 'next/head';
import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { ImPhone } from 'react-icons/im';
import { SiMinutemailer } from 'react-icons/si';

const contact = () => {
  return (
    <>
      <Head>
        <title>Gallerie | Toutes les photos du restaurant Indian Coffee</title>
        <meta
          property='og:title'
          content='Gallerie | Toutes les photos du restaurant Indian Coffee'
        />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='La gallerie du restaurant Indian Coffee'
        />
        <meta
          property='og:description'
          content='La gallerie du restaurant Indian Coffee'
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

      <section className='pt-32 pb-12'>
        <h1 className='text-7xl font-caveat text-center text-white font-bold'>
          Contact
        </h1>

        <div className='flex flex-row flex-wrap items-center justify-center gap-16 mt-12'>
          <div className='flex items-center'>
            <IoLocationSharp className='w-12 h-12 text-[#C6AB71] mr-4' />
            <p className='text-2xl text-center text-white font-bold'>
              8 Impasses de l'Orée du bois
            </p>
          </div>
          <div className='flex items-center'>
            <ImPhone className='w-12 h-12 text-[#C6AB71] mr-4' />
            <p className='text-2xl text-center text-white font-bold'>
              +33 (0)1 60 63 54 97
            </p>
          </div>
          <div className='flex items-center'>
            <SiMinutemailer className='w-12 h-12 text-[#C6AB71] mr-4' />
            <p className='text-2xl text-center text-white font-bold'>
              contact@indian-coffee.fr
            </p>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center pt-12 pb-12'>
        <iframe
          width='1000'
          height='540'
          id='gmap_canvas'
          src="https://maps.google.com/maps?width=900&amp;height=300&amp;hl=en&amp;q=8%20impasse%20de%20l'or%C3%A9e%20du%20bois%20Savigny%20Le%20Tempe+(Restaurant%20-%20Indian%20Cofee)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className='rounded-2xl'
        />
      </section>
    </>
  );
};

export default contact;

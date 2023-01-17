import Head from 'next/head';
import React from 'react';
import { Navbar } from '../components';

const gallerie = () => {
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

      <section className='bg-image4 min-h-[540px] flex justify-center items-center'>
        <h1 className='font-caveat text-7xl text-white font-bold'>Gallerie</h1>
      </section>
      <section className='flex flex-row flew-wrap justify-center items-center'></section>
    </>
  );
};

export default gallerie;

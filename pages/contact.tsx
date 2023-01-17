import Head from 'next/head';
import React from 'react';

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

      <section className='h-[100vh]'></section>
    </>
  );
};

export default contact;

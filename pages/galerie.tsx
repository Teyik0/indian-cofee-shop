import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { Carroussel } from '../components';

const photoEvent = [
  { img: '/gallerie/evenement/1.jpg' },
  { img: '/gallerie/evenement/2.jpg' },
  { img: '/gallerie/evenement/3.jpg' },
  { img: '/gallerie/evenement/4.jpg' },
  { img: '/gallerie/evenement/5.jpg' },
  { img: '/gallerie/evenement/6.jpg' },
  { img: '/gallerie/evenement/7.jpg' },
];

const photoDessert = [
  { img: '/gallerie/dessert/1.jpg' },
  { img: '/gallerie/dessert/2.jpg' },
  { img: '/gallerie/dessert/3.jpg' },
  { img: '/gallerie/dessert/4.jpg' },
  { img: '/gallerie/dessert/5.jpg' },
  { img: '/gallerie/dessert/6.jpg' },
  { img: '/gallerie/dessert/7.png' },
  { img: '/gallerie/dessert/8.png' },
];

const photoPlat = [
  { img: '/gallerie/plats/1.png' },
  { img: '/gallerie/plats/2.png' },
  { img: '/gallerie/plats/3.png' },
  { img: '/gallerie/plats/4.jpg' },
  { img: '/gallerie/plats/5.png' },
  { img: '/gallerie/plats/6.jpg' },
  { img: '/gallerie/plats/7.jpg' },
  { img: '/gallerie/plats/8.jpg' },
  { img: '/gallerie/plats/9.png' },
  { img: '/gallerie/plats/10.png' },
  { img: '/gallerie/plats/11.jpg' },
];

const photoSpe = [
  { img: '/gallerie/specialite/1.jpg' },
  { img: '/gallerie/specialite/2.jpg' },
  { img: '/gallerie/specialite/3.jpg' },
];

const photoEntry = [
  { img: '/gallerie/entree/1.jpg' },
  { img: '/gallerie/entree/2.jpg' },
  { img: '/gallerie/entree/3.png' },
  { img: '/gallerie/entree/4.png' },
  { img: '/gallerie/entree/5.jpg' },
  { img: '/gallerie/entree/6.jpg' },
  { img: '/gallerie/entree/7.jpg' },
  { img: '/gallerie/entree/8.jpg' },
  { img: '/gallerie/entree/9.jpg' },
  { img: '/gallerie/entree/10.jpg' },
  { img: '/gallerie/entree/11.png' },
];

const photoVege = [{ img: '/gallerie/vege/1.png' }];

const galerie = () => {
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

      <section className='bg-image5 min-h-[540px] flex justify-center items-center'>
        <h1 className='font-caveat text-7xl text-white font-bold'>Gallerie</h1>
      </section>

      <Carroussel photo={photoEntry} title='entrées' />
      <Carroussel photo={photoPlat} title='plats' />
      <Carroussel photo={photoSpe} title='spécialités' />
      <Carroussel photo={photoVege} title='végétariens' />
      <Carroussel photo={photoDessert} title='desserts' />
      <Carroussel photo={photoEvent} title='événements' />

      <h5 className='text-lg italic text-gray-200 text-center pb-12'>
        *Photos des plats non contractuelles
      </h5>
    </>
  );
};

export default galerie;

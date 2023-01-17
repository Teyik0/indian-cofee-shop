import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFacebook, BsInstagram, BsTelephone } from 'react-icons/bs';
import {
  Discover,
  HeroBanner,
  Navbar,
  DescBanner,
  DeliciousSection,
  SpecialDay,
  MoreToKnow,
  Footer,
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Accueil | Indian Coffee - Fast food indien à Savigny le Temple
        </title>
        <meta
          property='og:title'
          content='Accueil | Indian Coffee - Restaurant fast food Indien à Savigny le Temple'
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

      <HeroBanner />
      <Discover />
      <DescBanner />
      <DeliciousSection />
      <SpecialDay />
      <MoreToKnow />
      <section className='flex justify-center items-center pt-12 pb-24'>
        <iframe
          width='1920'
          height='400'
          id='gmap_canvas'
          src="https://maps.google.com/maps?width=900&amp;height=300&amp;hl=en&amp;q=8%20impasse%20de%20l'or%C3%A9e%20du%20bois%20Savigny%20Le%20Tempe+(Restaurant%20-%20Indian%20Cofee)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </section>
    </>
  );
}

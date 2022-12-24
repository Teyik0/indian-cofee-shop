import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Plat, SousPlat } from '../../components';

const platsVege = () => {
  return (
    <>
      <Head>
        <title>Plats Végétarien | Indian Coffee</title>
        <meta property='og:title' content='Plats Végétarien | Indian Coffee' />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='Tous les plats végétarien à la carte, que ce soit à emporter ou sur place.'
        />
        <meta
          property='og:description'
          content='Tous les plats végétarien à la carte, que ce soit à emporter ou sur place.'
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
      <section className='w-full items-center justify-center text-white'>
        <Link href='/' className='cursor-pointer'>
          <Image
            src='/IndianCoffee_Logo.png'
            width={150}
            height={150}
            alt='logo'
          />
        </Link>
        <Image
          src='/asset-plats-vege.png'
          width={500}
          height={150}
          alt='logo'
          className='hidden absolute md:flex xl:hidden top-0 right-0 z-0'
        />
        <Image
          src='/asset-plats-vege2.png'
          width={700}
          height={150}
          alt='logo'
          className='absolute hidden top-0 right-0 xl:flex'
        />

        <div className='pl-4 pr-4'>
          <h1 className='uppercase text-[#e8b755] text-2xl font-bold tracking-wider mb-2'>
            Plats végétariens
          </h1>
          <div className='mb-2'>
            <Plat
              title='SAUCE LÉGUMES'
              details='SAUCE À BASE DE LÉGUMES FRAIS SERVIE SANS ACCOMPAGNEMENT'
              price=''
            />
            <SousPlat title='KOUROUMA' details='' price='8,00€' />
            <SousPlat title='CURRY' details='' price='8,00€' />
            <SousPlat title='VINDALOO' details='' price='8,00€' />
          </div>

          <Plat
            title='DAL'
            details='SAUCE AUX LENTILLES SERVIE AVEC RIZ'
            price='10,00€'
          />
          <Plat
            title='DAL AU PANEER TIKKA'
            details='SAUCE AUX LENTILLES AVEC DES MORCEAUX DE FROMAGE INDIEN PANEER TIKKA SERVI AVEC NAAN NATURE'
            price='12,00€'
          />
          <Plat
            title='THALI'
            details='5 LÉGUMES EN SAUCE ACCOMPAGNÉS DE RIZ BASMATI'
            price='12,00€'
          />
          <Plat
            title='PANEER BUTTER MASALA'
            details="MÉLANGE DE RIZ SAFRANÉ, DE TOMATES, D'OIGNONS AU GINGEMBRE, ÉPICES INDIENNES ET FROMAGE INDIEN"
            price='12,00€'
          />
          <Plat
            title='PALAK PANEER'
            details='ÉPINARDS AVEC DES MORCEAUX DE FROMAGE INDIEN'
            price='11,00€'
          />
          <Plat
            title='CHANNA MASSALA'
            details='POIS CHICHE RELEVÉ AUX ÉPICES INDIENNES'
            price='11,00€'
          />
          <div className='mb-2'>
            <Plat
              title='DOSAI'
              details='CRÊPE INDIENNE SALÉE SERVIE AVEC 5 LÉGUMES'
              price=''
            />
            <SousPlat
              title='DOSAI CROUSTILLANT'
              details='CRÊPE INDIENNE CROUSTILLANT'
              price='8,00€'
            />
            <SousPlat
              title='MASSALA DOSAI'
              details='GARNIS AUX POMMES DE TERRE'
              price='11,00€'
            />
            <SousPlat
              title='ROYAL DOSAI'
              details='OEUF, VIANDE HACHÉE ET POMME DE TERRE'
              price='14,00€'
            />
            <SousPlat
              title='BOLLYWOOD DOSAI'
              details='POMMES DE TERRE, OIGNONS CHAMPIGNONS ET POULET'
              price='14,00€'
            />
            <SousPlat
              title='SUPPLÉMENT DOSAI NATURE'
              details='CRÊPE INDIENNE SANS ACCOMPAGNEMENT'
              price='4,00€'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default platsVege;

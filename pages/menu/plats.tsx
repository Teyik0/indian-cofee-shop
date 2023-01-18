import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Plat, SousPlat } from '../../components';

const plats = () => {
  return (
    <>
      <Head>
        <title>Plats | Indian Coffee</title>
        <meta property='og:title' content='Plats | Indian Coffee' />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='Tous les plats à la carte, que ce soit à emporter ou sur place.'
        />
        <meta
          property='og:description'
          content='Tous les plats à la carte, que ce soit à emporter ou sur place.'
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
      <section className='w-full items-center justify-center text-white pt-36 pb-24'>
        <Image
          src='/asset-plat.png'
          width={500}
          height={150}
          alt='logo'
          className='hidden absolute sm:flex xl:hidden top-0 right-0 z-0'
        />
        <Image
          src='/asset-plat.png'
          width={550}
          height={150}
          alt='logo'
          className='hidden absolute xl:flex top-0 right-0 z-0'
        />
        <div className='pl-4 pr-4'>
          <h1 className='uppercase text-[#e8b755] text-2xl font-bold tracking-wider mb-2'>
            plats
          </h1>

          <div className='mb-2'>
            <Plat
              title='SAUCE VINDALOO'
              details="SAUCE COMPOSÉ D'ÉPICES, PIMENTÉE POUR LES AMATEURS DE SENSATIONS FORTES SERVIE SANS ACCOMPAGNEMENT"
              price=''
            />
            <SousPlat title='POULET' price='8,00€' details='' />
            <SousPlat title='AGNEAU' price='9,50€' details='' />
            <SousPlat title='CREVETTES' price='11,00€' details='' />
            <SousPlat title='GAMBAS' price='14,00€' details='' />
            <SousPlat title='SAUMON' price='12,00€' details='' />
          </div>

          <div className='mb-2'>
            <Plat
              title='SAUCE CURRY'
              details="SAUCE PARFUMÉE D'ÉPICES TRADITIONNELLES AU GOÛT ENVOUTANT D'INDE SERVIE SANS ACCOMPAGNEMENT"
              price=''
            />
            <SousPlat title='POULET' price='8,00€' details='' />
            <SousPlat title='AGNEAU' price='9,50€' details='' />
            <SousPlat title='CREVETTES' price='11,00€' details='' />
            <SousPlat title='GAMBAS' price='14,00€' details='' />
            <SousPlat title='SAUMON' price='12,00€' details='' />
          </div>

          <div className='flex flex-col sm:flex-row sm:flex-wrap'>
            <div className='mb-2 sm:w-1/2'>
              <Plat
                title='SAUCE KOUROUMA'
                details="SAUCE COMPOSÉ D'ÉPICES DOUCES ET PARFUMÉ AU LAIT DE COCO SERVIE SANS ACCOMPAGNEMENT"
                price=''
                fullProps
              />
              <SousPlat title='POULET' price='8,00€' details='' fullProps />
              <SousPlat title='AGNEAU' price='9,50€' details='' fullProps />
              <SousPlat title='CREVETTES' price='11,00€' details='' fullProps />
              <SousPlat title='GAMBAS' price='14,00€' details='' fullProps />
            </div>

            <div className='mb-2 sm:w-1/2'>
              <Plat
                title='TIKKA MASSALA'
                details="MÉLANGE D'ÉPICES INDIENNES, OIGNONS ET POIVRONS"
                price=''
                fullProps
              />
              <SousPlat title='POULET' price='12,50€' details='' fullProps />
              <SousPlat title='AGNEAU' price='15,00€' details='' fullProps />
              <SousPlat title='GAMBAS' price='18,00€' details='' fullProps />
              <SousPlat title='SAUMON' price='15,00€' details='' fullProps />
            </div>

            <div className='mb-2 sm:w-1/2'>
              <Plat
                title='BIRYANI'
                details="MÉLANGE DE RIZ SAFRANÉ, DE TOMATES, D'OIGNONS AUX GINGEMBRE ET ÉPICE INDIENNE"
                price=''
                fullProps
              />
              <SousPlat title='POULET' price='10,00€' details='' fullProps />
              <SousPlat title='AGNEAU' price='14,00€' details='' fullProps />
              <SousPlat title='CREVETTES' price='13,00€' details='' fullProps />
              <SousPlat title='GAMBAS' price='18,00€' details='' fullProps />
              <SousPlat title='LÉGUMES' price='9,00€' details='' fullProps />
            </div>

            <div className='mb-2 sm:w-1/2'>
              <Plat
                title='KOTTU'
                details='EMINCÉES DE BAROTTA AVEC OEUF OU VIANDE '
                price=''
                fullProps
              />
              <SousPlat title='AGNEAU' price='10,00€' details='' fullProps />
              <SousPlat title='BOEUFS' price='10,00€' details='' fullProps />
              <SousPlat title='OEUFS' price='8,00€' details='' fullProps />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default plats;

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Plat, SousPlat } from '../../components';

const specialites = () => {
  return (
    <>
      <Head>
        <title>Spécialités | Indian Coffee</title>
        <meta property='og:title' content='Spécialités | Indian Coffee' />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='Toutes nos spécialités à la carte, que ce soit à emporter ou sur place.'
        />
        <meta
          property='og:description'
          content='Toutes nos spécialités à la carte, que ce soit à emporter ou sur place.'
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
          src='/asset-specialities.png'
          width={500}
          height={150}
          alt='logo'
          className='hidden absolute md:flex xl:hidden top-0 right-0 z-0'
        />
        <Image
          src='/asset-specialities2.png'
          width={700}
          height={150}
          alt='logo'
          className='absolute hidden top-0 right-0 xl:flex'
        />

        <div className='pl-4 pr-4'>
          <h1 className='uppercase text-[#e8b755] text-2xl font-bold tracking-wider mb-2'>
            spécialités
          </h1>

          <Plat
            title='BUTTER CHICKEN'
            details='POULET AU BEURRE ET RIZ BASMATI'
            price='13,50€'
          />
          <Plat
            title="CURRY D'AGNEAU AUX ÉPINARDS"
            details="CURRY D'AGNEAU ET RIZ BASMATI"
            price='15,50€'
          />
          <Plat
            title='FRIED RICE POULET'
            details='RIZ SAUTÉ AVEC POULET ET LÉGUMES'
            price='13,00€'
          />
          <Plat
            title='FRIED RICE ROYAL'
            details='POULET FRIT ET ÉPICÉ'
            price='9,00€'
          />
          <Plat
            title='CHILI CHICKEN'
            details='POULET FRIT ET ÉPICÉ, SAUCE CHILI'
            price='9,00€'
          />
          <Plat
            title='BEEF DEVAL'
            details='BOEUF SAUTÉ AUX ÉPICES'
            price='16,00€'
          />
          <Plat
            title='DORADE ROYALE ENTIÈRE'
            details='POISSON MARINÉ AUX ÉPICES, GRILLÉ AU FOUR TANDOOR SERVI AVEC DU RIZ'
            price='19,90€'
          />
          <div className='mb-2'>
            <Plat title='GARNITURES ET ACCOMPAGNEMENTS' details='' price='' />
            <SousPlat title='NAAN AU FROMAGE' details='' price='4,00€' />
            <SousPlat title='NAAN NATURE' details='' price='2,50€' />
            <SousPlat title='NAAN À L’AIL' details='' price='3,00€' />
            <SousPlat title='KEEMA NAAN' details='' price='4,50€' />
            <SousPlat title='BAROTTHA' details='' price='2,00€' />
            <SousPlat title='CHAPATTY' details='' price='2,00€' />
            <SousPlat title='RIZ BASMATI NATURE' details='' price='2,50€' />
            <SousPlat title='RIZ SUPREME' details='' price='3,00€' />
            <SousPlat title='RIZ COCO' details='' price='3,00€' />
          </div>
        </div>
      </section>
    </>
  );
};

export default specialites;

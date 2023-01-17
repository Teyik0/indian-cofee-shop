import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const menu = () => {
  return (
    <>
      <Head>
        <title>Menu | Indian Coffee - Notre carte</title>
        <meta
          property='og:title'
          content='Menu | Indian Coffee - Notre carte'
        />
        <meta property='og:site_name' content='Indian Coffee' />
        <meta
          name='description'
          content='La carte du restaurant Indian Coffee à Savigny le Temple, retrouvez tous nos plats que ce soit à emporter ou sur place.'
        />
        <meta
          property='og:description'
          content='La carte du restaurant Indian Coffee à Savigny le Temple, retrouvez tous nos plats que ce soit à emporter ou sur place.'
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

      <section className='w-full p-4 flex items-center justify-center font-caveat pt-32 pb-32'>
        <div className='mt-8 text-center flex flex-row flex-wrap gap-16 justify-center items-center'>
          {[
            { name: 'Entrées', link: '/menu/entrees' },
            { name: 'Plats', link: '/menu/plats' },
            { name: 'Spécialités', link: '/menu/specialites' },
            { name: 'Plats végétariens', link: '/menu/plats-vegetariens' },
            { name: 'Menus', link: '/menu/menus' },
            { name: 'Desserts', link: '/menu/desserts' },
            { name: 'Boissons', link: '/menu/boissons' },
          ].map((item: any) => (
            <Link key={item.name} href={item.link}>
              <div
                className='w-[400px] h-[200px] bg-[#2a2a2a] rounded-xl flex justify-center items-center
              bg-image4 hover:scale-110 duration-300 ease-in-out text-white hover:text-[#786617]'
              >
                <h2 className='text-5xl xl:text-6xl font-bold'>{item.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default menu;

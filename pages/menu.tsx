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

      <section className='w-full p-4 flex items-center justify-center text-white h-[100vh]'>
        <div className='mt-8 text-center text-[#a96e22]'>
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
              <h2
                className='mb-8 text-5xl xl:text-6xl font-bold hover:underline 
              hover:underline-offset-2 hover:text-[#786617]'
              >
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default menu;

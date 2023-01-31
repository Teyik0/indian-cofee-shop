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

      <section className='p-4 flex flex-col items-center justify-center font-caveat pt-32 pb-24'>
        <div className='mt-8 text-center flex flex-row flex-wrap gap-8 sm:gap-16 justify-center items-center'>
          {[
            { name: 'Menus', link: '/menu/menus', img: 'bg-image-menu' },
            { name: 'Entrées', link: '/menu/entrees', img: 'bg-image-entry' },
            { name: 'Plats', link: '/menu/plats', img: 'bg-image-plats' },
            {
              name: 'Spécialités',
              link: '/menu/specialites',
              img: 'bg-image-special',
            },
            {
              name: 'Plats végétariens',
              link: '/menu/plats-vegetariens',
              img: 'bg-image4',
            },
            {
              name: 'Desserts',
              link: '/menu/desserts',
              img: 'bg-image-desserts',
            },
            {
              name: 'Boissons',
              link: '/menu/boissons',
              img: 'bg-image-boissons',
            },
          ].map((item: any) => (
            <Link key={item.name} href={item.link}>
              <div
                className={`w-[100vw] sm:w-[400px] h-[250px] bg-[#2a2a2a] sm:rounded-xl flex justify-center items-center
              ${item.img} sm:hover:scale-110 duration-300 ease-in-out text-white hover:text-[#786617] shadow-2xl`}
              >
                <h2 className='text-5xl xl:text-6xl font-bold'>{item.name}</h2>
              </div>
            </Link>
          ))}
        </div>
        <h5 className='text-lg italic text-gray-200 text-center pt-12'>
          *Photos des plats non contractuelles
        </h5>
      </section>
    </>
  );
};

export default menu;

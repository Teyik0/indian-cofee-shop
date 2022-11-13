import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const menu = () => {
  return (
    <>
      <Head>
        <title>Menu | Indian Cofee</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <section className='w-full p-4 items-center justify-center text-white h-[100vh]'>
        <Image
          src='/IndianCoffee_Logo.png'
          width={150}
          height={150}
          alt='logo'
          className='m-auto'
        />
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
                className='mb-8 text-5xl font-bold hover:underline 
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

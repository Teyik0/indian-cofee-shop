import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr-FR',
    },
  },
  icons: {
    icon: '/favicon.png',
  },
  title: 'Menu | Indian Coffee - Notre carte',
  description:
    'La carte du restaurant Indian Coffee à Savigny le Temple, retrouvez tous nos plats que ce soit à emporter ou sur place.',
  openGraph: {
    title: 'Menu | Indian Coffee - Notre carte',
    description:
      'La carte du restaurant Indian Coffee à Savigny le Temple, retrouvez tous nos plats que ce soit à emporter ou sur place.',
    siteName: 'Indian Coffee',
    locale: 'fr',
    url: 'https://indiancoffee.fr/',
  },
};

const menuItems = [
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
  {
    name: 'Les vins',
    link: '/menu/vins',
    img: 'bg-image-vins',
  },
];

const page = () => {
  return (
    <section className='p-4 flex flex-col items-center justify-center font-caveat pt-32 pb-24'>
      <div className='mt-8 text-center flex flex-row flex-wrap gap-8 sm:gap-16 justify-center items-center'>
        {menuItems.map((item: any) => (
          <Link key={item.name} href={item.link} legacyBehavior>
            <div
              className={`w-[100vw] sm:w-[400px] h-[250px] bg-[#2a2a2a] sm:rounded-xl flex justify-center items-center
          ${item.img} sm:hover:scale-110 duration-300 ease-in-out text-white hover:text-[#786617] shadow-2xl cursor-pointer`}
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
  );
};

export default page;

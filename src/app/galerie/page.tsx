import { Metadata } from 'next';
import Carousel from '../../components/Carousel';
import { Carroussel } from '../../components';

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
  title: 'Galerie | Toutes les photos du restaurant Indian Coffee',
  description:
    'Explorez la galerie du restaurant Indian Coffee et plongez dans un voyage visuel captivant à travers nos délicieux plats. Découvrez nos spécialités culinaires, notre décoration authentique et notre passion pour offrir une expérience gastronomique unique.',
  openGraph: {
    title: 'Galerie | Toutes les photos du restaurant Indian Coffee',
    description:
      'Explorez la galerie du restaurant Indian Coffee et plongez dans un voyage visuel captivant à travers nos délicieux plats. Découvrez nos spécialités culinaires, notre décoration authentique et notre passion pour offrir une expérience gastronomique unique.',
    siteName: 'Indian Coffee',
    locale: 'fr',
    url: 'https://indiancoffee.fr/',
  },
};

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

const page = () => {
  return (
    <div>
      <section className='bg-image5 min-h-[540px] flex justify-center items-center'>
        <h1 className='font-caveat text-7xl text-white font-bold'>Galerie</h1>
      </section>

      <Carroussel title='Entrées' photo={photoEntry} />
      <Carroussel title='Plats' photo={photoPlat} />
      <Carroussel title='Spécialités' photo={photoSpe} />
      <Carroussel title='Desserts' photo={photoDessert} />
      <Carroussel title='évènements' photo={photoEvent} />

      <section className='sm:px-8 px-4 xl:px-24x'>
        <h5 className='text-lg italic text-gray-200 text-left pb-12'>
          *Photos des plats non contractuelles
        </h5>
      </section>
    </div>
  );
};

export default page;

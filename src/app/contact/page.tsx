import { IoLocationSharp } from 'react-icons/io5';
import { ImPhone } from 'react-icons/im';
import { SiMinutemailer } from 'react-icons/si';
import { Metadata } from 'next';

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
  title: 'Contact | Indian Coffee',
  description:
    "Contactez-nous pour toute demande, question ou commentaire. L'équipe d'Indian Coffee est là pour vous aider et vous offrir une expérience client exceptionnelle. Remplissez notre formulaire de contact ou appelez-nous directement. Nous sommes impatients de vous entendre et de répondre à vos besoins en matière de café indien.",
  openGraph: {
    title: 'Accueil | Indian Coffee - Fast food indien à Savigny le Temple',
    description:
      "Contactez-nous pour toute demande, question ou commentaire. L'équipe d'Indian Coffee est là pour vous aider et vous offrir une expérience client exceptionnelle. Remplissez notre formulaire de contact ou appelez-nous directement. Nous sommes impatients de vous entendre et de répondre à vos besoins en matière de café indien.",
    siteName: 'Indian Coffee',
    locale: 'fr',
    url: 'https://indiancoffee.fr/',
  },
};

const page = () => {
  return (
    <div>
      <section className='pt-32 pb-12'>
        <h1 className='text-7xl font-caveat text-center text-white font-bold'>
          Contact
        </h1>

        <div className='flex flex-row flex-wrap items-center justify-center gap-16 mt-12'>
          <div className='flex items-center'>
            <IoLocationSharp className='w-12 h-12 text-[#C6AB71] mr-4' />
            <p className='text-lg sm:text-2xl text-center text-white font-bold'>
              8 Impasse de l'Orée du bois, 77176 Savigny-le-Temple
            </p>
          </div>
          <div className='flex items-center'>
            <ImPhone className='w-12 h-12 text-[#C6AB71] mr-4' />
            <p className='text-lg sm:text-2xl text-center text-white font-bold'>
              +33 (0)1 60 63 54 97
            </p>
          </div>
          <div className='flex items-center'>
            <SiMinutemailer className='w-12 h-12 text-[#C6AB71] mr-4' />
            <p className='text-lg sm:text-2xl text-center text-white font-bold'>
              indiancoffee77@gmail.com
            </p>
          </div>
        </div>
      </section>

      <section className='flex justify-center items-center pt-12 pb-12'>
        <iframe
          width='1000'
          height='540'
          id='gmap_canvas'
          src="https://maps.google.com/maps?width=900&amp;height=300&amp;hl=en&amp;q=8%20impasse%20de%20l'or%C3%A9e%20du%20bois%20Savigny%20Le%20Tempe+(Restaurant%20-%20Indian%20Cofee)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          className='rounded-2xl'
        />
      </section>
    </div>
  );
};

export default page;

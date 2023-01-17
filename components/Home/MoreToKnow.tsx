import React from 'react';

const MoreToKnow = () => {
  const rectStyle = `flex flex-col w-[100vw] sm:w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 
  bg-white lg:-translate-y-32 sm:rounded-xl p-8 text-center justify-center items-center`;
  return (
    <section className='pt-12 pb-12 sm:p-12 flex flex-col justify-center items-center'>
      <div className='flex flex-col sm:flex-row justify-center items-center sm:flex-wrap gap-8'>
        <div className={rectStyle}>
          <h3 className='opacity-70 font-bold uppercase text-2xl'>
            Notre menus
          </h3>
          <p className='mt-4 font-semibold'>Découvrer nos menus délicieux</p>
          <button
            className='rounded-xl w-1/2 mt-12 pl-8 pr-8 pt-4 pb-4 bg-white text-black 
            font-bold border-2 border-gray-800'
          >
            Cliquez ici
          </button>
        </div>

        <div className={rectStyle}>
          <h3 className='opacity-70 font-bold uppercase text-2xl'>
            Réservez les fêtes
          </h3>
          <p className='mt-4 font-semibold'>
            Célébrez vos moment les plus importants
          </p>
          <button
            className='rounded-xl w-1/2 mt-12 pl-8 pr-8 pt-4 pb-4 bg-white text-black 
            font-bold border-2 border-gray-800'
          >
            Cliquez ici
          </button>
        </div>

        <div className={rectStyle}>
          <h3 className='opacity-70 font-bold uppercase text-2xl'>Galleries</h3>
          <p className='mt-4 font-semibold'>
            Explorez notre galleries de photos
          </p>
          <button
            className='rounded-xl w-1/2 mt-12 pl-8 pr-8 pt-4 pb-4 bg-white text-black 
            font-bold border-2 border-gray-800'
          >
            Cliquez ici
          </button>
        </div>
      </div>

      <div className='flex flex-row'></div>
    </section>
  );
};

export default MoreToKnow;

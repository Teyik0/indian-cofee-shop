import Image from 'next/image';
import React from 'react';

interface IProps {
  photo: any;
  title: string;
}

const Carroussel = ({ photo, title }: IProps) => {
  return (
    <section className='sm:px-8 px-4 xl:px-24x'>
      <h2 className='capitalize text-4xl font-bold text-white text-center pt-12'>
        {title}
      </h2>
      <div className='grid grid-cols-12 w-full justify-center items-center gap-6 py-12'>
        {photo.map((item: any) => (
          <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 h-[250px] relative hover:scale-105 duration-500 ease-in-out'>
            <Image
              src={item.img}
              alt='photo'
              fill={true}
              className='object-cover rounded-2xl bg-[#3a3737]'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carroussel;

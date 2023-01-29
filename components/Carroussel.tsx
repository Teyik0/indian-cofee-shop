import Image from 'next/image';
import React from 'react';

interface IProps {
  photo: any;
  title: string;
}

const Carroussel = ({ photo, title }: IProps) => {
  return (
    <section>
      <h2 className='capitalize text-4xl font-bold text-white text-center pt-12'>
        {title}
      </h2>
      <section className='flex flex-row flex-wrap justify-center items-center gap-12 pt-12 pb-12'>
        {photo.map((item: any) => (
          <div className='w-[400px] h-[250px] relative hover:scale-110 duration-500 ease-in-out'>
            <Image
              src={item.img}
              alt='photo'
              fill={true}
              className='object-cover rounded-2xl bg-[#3a3737]'
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Carroussel;

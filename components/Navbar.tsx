import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CgMenuRight } from 'react-icons/cg';
import { MdCancel } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <nav>
      <div className='fixed z-50 top-0 right-0 md:hidden'>
        {!showMenu ? (
          <CgMenuRight
            className='text-6xl cursor-pointer text-white'
            onClick={() => setShowMenu((prev) => !prev)}
          />
        ) : (
          <div className='h-[100vh] bg-[#242628] shadow-lg p-8 rounded-l-3xl pt-24'>
            <MdCancel
              className='text-6xl cursor-pointer absolute right-0 top-0 text-white'
              onClick={() => setShowMenu((prev) => !prev)}
            />
            {[
              { name: 'Accueil', link: '/' },
              { name: 'Menu', link: '/ ' },
            ].map((item: any) => (
              <h2
                key={item.name}
                className='font-bold cursor-pointer text-3xl
                 hover:text-[#b4960c] duration-500 mb-4 text-white'
                onClick={() => router.push(item.link)}
              >
                {item.name}
              </h2>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

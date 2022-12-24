import { useState } from 'react';
import { useRouter } from 'next/router';
import { CgMenuRight } from 'react-icons/cg';
import { MdCancel } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <nav>
      <div className='fixed z-50 top-0 right-0 xl:hidden'>
        {!showMenu ? (
          <CgMenuRight
            className='text-6xl cursor-pointer text-white'
            onClick={() => setShowMenu((prev) => !prev)}
          />
        ) : (
          <div className='bg-[#242628] mt-4 mr-4 shadow-xl p-8 rounded-3xl'>
            <h2
              className='font-bold cursor-pointer text-2xl z-20 shadow-lg
                 hover:text-[#b4960c] duration-500 mb-4 text-white'
              onClick={() => {
                router.push('/');
                setShowMenu(false);
              }}
            >
              Accueil
            </h2>
            <h2
              className='font-bold cursor-pointer text-2xl z-20 shadow-lg
                 hover:text-[#b4960c] duration-500 text-white'
              onClick={() => {
                router.push('/menu');
                setShowMenu(false);
              }}
            >
              Menu
            </h2>
          </div>
        )}
      </div>

      {/* <div className='absolute hidden xl:flex right-20 top-20'>
        <div className='h-1 w-24 bg-white absolute -top-5' />
        <div className='h-10 w-1 bg-white absolute -top-5 -right-5' />
        <h2 className='text-white text-3xl'>Menu</h2>
      </div> */}
    </nav>
  );
};

export default Navbar;

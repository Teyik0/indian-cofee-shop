import { useState } from 'react';
import { useRouter } from 'next/router';
import { CgMenuRight } from 'react-icons/cg';
import { MdCancel } from 'react-icons/md';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <nav>
      <div className='fixed z-50 top-0 right-0 lg:hidden'>
        {!showMenu ? (
          <CgMenuRight
            className='text-6xl cursor-pointer text-white'
            onClick={() => setShowMenu((prev) => !prev)}
          />
        ) : (
          <div className='bg-[#242628] mt-4 mr-4 shadow-xl p-8 rounded-3xl'>
            {[
              { name: 'Accueil', link: '/' },
              { name: 'Menu', link: '/menu' },
            ].map((item: any) => (
              <h2
                key={item.name}
                className='font-bold cursor-pointer text-2xl z-20 shadow-lg
                 hover:text-[#b4960c] duration-500 mb-4 text-white'
                onClick={() => {
                  router.push(item.link);
                  setShowMenu(false);
                }}
              >
                {item.name}
              </h2>
            ))}

            <h2
              className='font-bold cursor-pointer text-2xl z-20 shadow-lg
                 hover:text-[#b4960c] duration-500 text-white mr-4'
              onClick={() => setShowMenu((prev) => !prev)}
            >
              Quitter
            </h2>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

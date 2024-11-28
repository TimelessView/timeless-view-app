'use client';

/*type BurgerMenuType = {
  // children: ReactNode;
}*/

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '@mui/material/Modal';

export default function BurgerMenu(/*{  }: BurgerMenuType*/) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [navigationOpen, setNavigationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight * 0.5;

      if (buttonRef.current) {
        if (scrollPosition >= threshold) {
          buttonRef.current.classList.remove('hidden');
        } else {
          buttonRef.current.classList.add('hidden');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Modal
        open={navigationOpen}
        onClose={() => setNavigationOpen(false)}
        slotProps={{
          backdrop: {
            sx: { backgroundColor: `rgba(0, 0, 0, 0.95)` }
          }
        }}
      >
        <div className={`max-w-screen-xl m-auto pt-12 relative`}>
          <motion.button
            onClick={() => setNavigationOpen(false)}
            whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.2 } }}
            initial={{ scale: 0.7, y: -100 }}
            animate={{ scale: 1, y: 0 }}
            whileTap={{ scale: 0.9 }}
            className={`absolute top-10 right-3 transition-all duration-200`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="104" viewBox="0 0 55 104" fill="none">
              <path d="M9.19727 70.5379L45.8035 33.9316M45.8035 70.5379L9.19727 33.9316" stroke="white"
                    stroke-width="6.47058" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </motion.button>
          <h2 className={`font-italiana uppercase text-3xl mb-20`}>timeless view</h2>
          <div className={`max-w-2xl flex justify-center flex-col gap-7`}>
            <div className={`flex items-center justify-between`}>
              <a className={`font-bold text-6xl`} href="#">About Me</a>
              <span className={`font-semibold text-6xl`}>[01]</span>
            </div>

            <div className={`flex items-center justify-between text-zinc-700`}>
              <a className={`font-semibold text-6xl`} href="#">Photo Gallery</a>
              <span className={`font-semibold text-6xl text-zinc-900`}>[02]</span>
            </div>

            <div className={`flex items-center justify-between text-zinc-700`}>
              <a className={`font-semibold text-6xl`} href="#">Video Gallery</a>
              <span className={`font-semibold text-6xl text-zinc-900`}>[03]</span>
            </div>

            <div className={`flex items-center justify-between text-zinc-700`}>
              <a className={`font-semibold text-6xl`} href="#">My Services</a>
              <span className={`font-semibold text-6xl text-zinc-900`}>[04]</span>
            </div>
          </div>
        </div>
      </Modal>
      <div ref={buttonRef} className={`fixed top-14 sm:top-6 right-6 z-10 hidden`}>
        <motion.button
          onClick={() => setNavigationOpen(true)}
          initial={{ scale: 0, rotate: 360 }}
          whileInView={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
          className={`bg-zinc-950 p-4 rounded-full`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M5.8335 12.5H34.1668M5.8335 20H29.1668M5.8335 27.5H34.1668" stroke="#FDFDFD" stroke-width="1.66667"
                  stroke-linecap="round" />
          </svg>
        </motion.button>
      </div>
    </>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GoToTheTopBtn() {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight * 0.3;

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
    <div ref={buttonRef} className={`fixed bottom-14 sm:bottom-6 right-6 z-10 hidden`}>
      <motion.button
        initial={{ scale: 0, rotate: 360 }}
        whileInView={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 360 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`bg-zinc-950 p-3 rounded-full`}>
        <svg className={`sm:w-10 sm:h-10 w-8 h-8`} xmlns="http://www.w3.org/2000/svg" width="45" height="45"
             viewBox="0 0 45 45"
             fill="none">
          <path
            d="M22.5001 7.89809L15.7982 14.6005L0 30.3964L6.70204 37.1027L22.5001 21.3024L38.2981 37.1027L45 30.3964L29.2025 14.6005L22.5001 7.89809Z"
            fill="#6A6A6A" />
        </svg>
      </motion.button>
    </div>
  );
}
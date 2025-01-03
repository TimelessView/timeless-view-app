'use client';

import Modal from '@mui/material/Modal';
import { useCartDispatch, useCartSelector } from '@/store/hooks';
import { photographySliceActions } from '@/store/slices/photographySlice';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import BtnSmall from '@/components/UI/BtnSmall';
import { fullScreenPhotos } from '@/components/Layout/Sections/PhotographySection';

export default function FullScreenImagery() {
  const openFullScreenMode = useCartSelector((state) => state.photography.imagery.visible);
  const currentImage = useCartSelector((state) => state.photography.imagery.image);
  const dispatch = useCartDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const index = fullScreenPhotos.indexOf(currentImage);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [currentImage]);

  function handleClose() {
    dispatch(photographySliceActions.toggleImageVisibility(false));
  }

  function handleNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % fullScreenPhotos.length);
  }

  function handlePrev() {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + fullScreenPhotos.length) % fullScreenPhotos.length);
  }

  return (
    <AnimatePresence>
      <Modal open={openFullScreenMode} onClose={handleClose} className={`sm:hidden`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: .2 }}
          className={`w-lvw h-lvh relative`}>
          <motion.img
            src={fullScreenPhotos[currentIndex]} alt="Full Screen Image" className={`w-full h-full object-cover`} />

          <div onClick={handleClose} className={`absolute bottom-7 right-1/2 translate-x-1/2 cursor-pointer
          transition-all duration-200 hover:rotate-180 hover:scale-110`}>
            <motion.svg
              initial={{ rotate: 0, y: -100, scale: 1 }}
              animate={{ rotate: 360, y: 0, scale: 1.1 }}
              exit={{ rotate: 0, y: -100, scale: 1 }}
              transition={{ duration: .5 }}
              xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
              <rect width="90" height="90" rx="45" fill="#0C0C0C" />
              <path d="M29.089 60.9104L60.9115 29.0879M60.9115 60.9104L29.089 29.0879" stroke="white"
                    stroke-width="5.625" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </motion.svg>
          </div>
          <BtnSmall customClasses={`absolute left-4 bottom-4`} label={`Prev`} onClick={handlePrev} />
          <BtnSmall customClasses={`absolute right-4 bottom-4`} label={`Next`} onClick={handleNext} />
        </motion.div>
      </Modal>
    </AnimatePresence>
  )
    ;
}
'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// @ts-ignore
import Slider from 'react-slick';
import Photo1 from '@/assets/photography/photo-original-1.png';
import Photo3 from '@/assets/photography/photo-original-3.png';
import Photo4 from '@/assets/photography/photo-original-4.png';
import Photo5 from '@/assets/photography/photo-original-5.png';
import Photo6 from '@/assets/photography/photo-original-6.png';
import Photo7 from '@/assets/photography/photo-original-7.png';

import { motion } from 'framer-motion';
import Photography from '@/components/Layout/Photography';
import { sliderSettings } from '@/utils/variables';
import AnimatedImage from '@/components/UI/AnimatedImage';
import { useCartDispatch } from '@/store/hooks';
import { photographySliceActions } from '@/store/slices/photographySlice';
import Tooltip from '@/components/Layout/Tooltip';
import { animationVariants } from '@/components/Layout/Videography';

const photos = [Photo1, Photo5, Photo3, Photo4, Photo6, Photo7];
export const fullScreenPhotos = [Photo1.src, Photo5.src, Photo3.src, Photo4.src, Photo6.src, Photo7.src];

function PhotographySection() {
  const dispatch = useCartDispatch();

  function handleClickOnImage(image: string) {
    dispatch(photographySliceActions.toggleImageVisibility(true));
    dispatch(photographySliceActions.setImage(image));
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`mb-20 pt-4`}>
      <Photography />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animationVariants}
        className={`hidden sm:block pl-7`}>
        <Slider {...sliderSettings}
                className={`overflow-x-auto scrollbar-hide overflow-y-hidden gap-4 sm:gap-7`}>
          {photos.map((photo, index) => (
            <AnimatedImage key={index} src={photo.src} alt={`Image ${index + 1}`} />
          ))}
        </Slider>
      </motion.div>
      <div className={`flex items-center overflow-x-auto scrollbar-hide gap-4 sm:hidden`}>
        {fullScreenPhotos.map((photo, index) => (
          <img
            key={index}
            onClick={() => handleClickOnImage(photo)}
            src={photos[index].src} // Adjust index to match the full-screen photos
            alt={`Photo ${index + 1}`}
            className={`w-full`}
          />
        ))}
      </div>
      <div className={`sm:hidden`}>
        <Tooltip label={`Click on the image to view it in full screen`} />
      </div>
    </motion.section>
  );
}

export default PhotographySection;
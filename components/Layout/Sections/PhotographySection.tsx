'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// @ts-ignore
import Slider from 'react-slick';
import Photo1 from '@/assets/photography/photo-original-1.png';
import Photo2 from '@/assets/photography/photo-original-2.png';
import Photo3 from '@/assets/photography/photo-original-3.png';
import Photo4 from '@/assets/photography/photo-original-4.png';
import Photo5 from '@/assets/photography/photo-original-5.png';
import Photo6 from '@/assets/photography/photo-original-6.png';
import Photo7 from '@/assets/photography/photo-original-7.png';
import Photo8 from '@/assets/photography/photo-original-8.png';
import Photo9 from '@/assets/photography/photo-original-9.png';

import { motion } from 'framer-motion';
import Photography from '@/components/Layout/Photography';
import { sliderSettings } from '@/utils/variables';
import AnimatedImage from '@/components/UI/AnimatedImage';


const photos = [Photo6, Photo7, Photo8, Photo9, Photo1, Photo2, Photo3, Photo4, Photo5];

function PhotographySection(/*{  }: PhotographySectionType*/) {

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`mb-20 pt-4`}>
      <Photography />
      <div className={`hidden sm:block`}>
        <Slider {...sliderSettings}
                className={`overflow-x-auto scrollbar-hide overflow-y-hidden gap-4 sm:gap-7`}>
          {photos.map((photo, index) => (
            <AnimatedImage key={index} src={photo.src} alt={`Image ${index + 1}`} />
          ))}
        </Slider>
      </div>
      <div className={`flex items-center overflow-x-auto scrollbar-hide gap-4 sm:hidden`}>
        <img src={Photo1.src} alt={`Photo 1`} className={`w-full`} />
        <img src={Photo2.src} alt={`Photo 2`} className={`w-full`} />
        <img src={Photo3.src} alt={`Photo 3`} className={`w-full`} />
        <img src={Photo4.src} alt={`Photo 4`} className={`w-full`} />
        <img src={Photo5.src} alt={`Photo 5`} className={`w-full`} />
        <img src={Photo6.src} alt={`Photo 6`} className={`w-full`} />
        <img src={Photo7.src} alt={`Photo 7`} className={`w-full`} />
        <img src={Photo8.src} alt={`Photo 8`} className={`w-full`} />
        <img src={Photo9.src} alt={`Photo 9`} className={`w-full`} />
      </div>
      {/*<Tooltip label={`Scroll to the right to see more`} />*/}
    </motion.section>
  );
}

export default PhotographySection;

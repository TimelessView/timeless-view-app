'use client';

import { useEffect, useState } from 'react';
import UserImg1 from '@/assets/testimonials/user-icon-1.png';
import UserImg2 from '@/assets/testimonials/user-icon-2.png';
// @ts-ignore
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { sliderSettings } from '@/utils/variables';
import Testimonials from '@/components/Layout/Testimonials';
import TestimonialCard from '@/components/UI/TestimonialCard';
import ArrowIcon from '@/components/UI/ArrowIcon';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowWidth;
}

function TestimonialsSection() {
  const [paginateComments, setPaginateComments] = useState<boolean>(true);
  const windowWidth = useWindowWidth();

  const settings = {
    ...sliderSettings,
    // pauseOnHover: true,
    slidesToShow: windowWidth! <= 1064 ? 1 : 2
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`mb-24`}>
      <Testimonials />

      <div className={`overflow-x-auto scrollbar-hide ml-4 hidden sm:block`}>
        <Slider {...settings} className={`overflow-x-auto scrollbar-hide ml-4 hidden sm:flex`}>
          <div>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg1.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </div>
          <div>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </div>
          <div>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </div>
          <div>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg1.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </div>
          <div>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </div>
        </Slider>
      </div>

      <div className={`flex flex-col gap-12 sm:hidden`}>
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2.src}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2.src}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        <TestimonialCard
          date={`August 14, 2024`}
          title={`very good!`}
          initials={`Jane Doe`}
          imgSrc={UserImg2.src}
          quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
        {!paginateComments && (
          <>
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
            <TestimonialCard
              date={`August 14, 2024`}
              title={`very good!`}
              initials={`Jane Doe`}
              imgSrc={UserImg2.src}
              quote={`Working with Olena was an absolute dream! She has an incredible talent for making everyone feel comfortable, capturing authentic, beautiful moments that we’ll cherish forever!`} />
          </>
        )}
      </div>
      <div className={` mx-4 mt-14 sm:hidden`}>
        <button onClick={
          paginateComments ? () => setPaginateComments(false) : () => setPaginateComments(true)
        } className={`sm:text-4xl text-xl bp-828:text-2xl uppercase flex font-semibold items-center gap-4 py-9 bp-828:py-5 px-14 
            border border-zinc-50 bp-828:w-fit w-full justify-center text-nowrap`}>
          {paginateComments ? `See more` : `See less`}
          <div className={paginateComments ? `rotate-90` : `-rotate-90`}>
            <ArrowIcon style={`large`} />
          </div>
        </button>
      </div>
    </motion.section>
  );
}

export default TestimonialsSection;

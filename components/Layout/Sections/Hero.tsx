'use client';

/* interface HeroType {
  // children: ReactNode;
} */

import { motion } from 'framer-motion';
import Navigation from '@/components/Layout/Navigation';
import Heading from '@/components/Typography/Heading';
import HighlightLetter from '@/components/Typography/HighlightLetter';
import Paragraph from '@/components/Typography/Paragraph';
import { OLENAS_INSTAGRAM } from '@/utils/variables';
import ArrowIcon from '@/components/UI/ArrowIcon';
import ReduxProvider from '@/components/Providers/ReduxProvider';
import HighlightText from '@/components/Typography/HighlightText';

function Hero(/*{  }: HeroType*/) {
  return (
    <section
      id={`aboutMe`}
      className={`relative max-w-screen-xl px-4 sm:px-9 m-auto pt-7 sm:pt-12`}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`mb-[76px]`}>
        <ReduxProvider>
          <Navigation />
        </ReduxProvider>
      </motion.div>
      <div className={`flex flex-col text-left`}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={`mb-14 hidden bp-828:flex`}>
          <Heading heading={(
            <>
              Turning <HighlightLetter text={`L`} />ife’s
              Beauty <br />
              into Timeless <HighlightLetter text={`A`} />rt
            </>
          )} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={`mb-12 hidden bp-1042:flex`}>
          <Paragraph text={(
            <>
              Hi, I’m Olena, a passionate visual storyteller with roots in a cozy Ukrainian village and a creative
              journey that brought me to Canada in 2023. Inspired by my love for art and my surroundings, I specialize
              in turning life’s most beautiful moments <HighlightText text={`into vivid visual stories`} /> through
              photography and
              videography. </>
          )} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={`text-right bp-828:hidden mt-64 mb-14`}>
          <span className={`uppercase text-sm mb-3 inline-block`}>professional photographer & videographer</span>
          <Heading heading={(
            <div className={`flex flex-col align-end`}>
              <div className={`ml-auto`}>
                <HighlightLetter text={`O`} /><span className={`uppercase inline-block`}>lena</span>
              </div>
              <div className={`ml-auto`}>
                <HighlightLetter text={`V`} /><span className={`uppercase inline-block`}>inytska</span>
              </div>
            </div>
          )} />
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          target={`_blank`}
          href={OLENAS_INSTAGRAM} className={`sm:text-4xl text-xl bp-828:text-2xl uppercase flex font-semibold items-center gap-4 py-9 bp-828:py-5 px-14 
            border border-zinc-50 bp-828:w-fit w-full justify-center text-nowrap`}>See my portfolio
          <div className={`hidden sm:flex`}>
            <ArrowIcon style={`large`} />
          </div>
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={`absolute text-right -bottom-48 bp-1042:bottom-0 right-6 hidden bp-828:block`}>
        <span className={`uppercase text-sm mb-3 inline-block`}>professional photographer & videographer</span>
        <Heading heading={(
          <div className={`flex flex-col align-end`}>
            <div className={`ml-auto`}>
              <HighlightLetter text={`O`} /><span className={`uppercase inline-block`}>lena</span>
            </div>
            <div>
              <HighlightLetter text={`V`} /><span className={`uppercase inline-block`}>inytska</span>
            </div>
          </div>
        )} />
      </motion.div>
    </section>
  );
}

export default Hero;

// 'use client';

/*type NavigationType = {
  // children: ReactNode;
}*/

import { motion } from 'framer-motion';
import Link from '@/components/UI/Link';
import { OLENAS_INSTAGRAM } from '@/utils/variables';

export default function Navigation(/*{  }: NavigationType*/) {
  return (
    <>
      <header className={`items-center m-auto`}>
        <div className={`flex items-center justify-between`}>
          <div className={`flex items-center`}>
            <motion.h2
              onClick={() => window.location.href = `/`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`font-italiana text-3xl mr-24 bp-828:text-2xl text-nowrap 
            cursor-pointer`}>Timeless View
            </motion.h2>
            <div className={`items-center gap-7 hidden bp-828:flex`}>
              <Link href={`#aboutMe`} label={`About me`} />
              <Link href={`#photoGallery`} label={`Photo Gallery`} />
              <Link href={`#videoGallery`} label={`Video Gallery`} />
              <Link href={`#myServices`} label={`My Services`} />
            </div>
          </div>
          <div className={`items-center gap-7 hidden bp-1042:flex`}>
            <Link href={`
            tel:+1-234-567-8901`} label={`Contact me`} />
            <Link shouldOpenNewTab href={OLENAS_INSTAGRAM}
                  showArrowIcon
                  label={`My Instagram`} mode={`highlighted`} />
          </div>
        </div>
      </header>
    </>
  );
}

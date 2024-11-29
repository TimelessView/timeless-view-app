// 'use client';

/*type NavigationType = {
  // children: ReactNode;
}*/

import { motion } from 'framer-motion';
import Link from '@/components/UI/Link';
import { OLENAS_INSTAGRAM } from '@/utils/variables';
import { useCartDispatch } from '@/store/hooks';
import { navigationSliceActions } from '@/store/slices/NavigationSlice';

export default function Navigation(/*{  }: NavigationType*/) {
  const dispatch = useCartDispatch();

  function setNavigationOpen(state: boolean) {
    dispatch(navigationSliceActions.toggleNavigation(state));
  }

  return (
    <>
      <header className={`items-center m-auto`}>
        <div className={`flex items-center justify-between`}>
          <div className={`flex items-center justify-between`}>
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
          <svg
            onClick={() => setNavigationOpen(true)}
            className={`bp-828:hidden min-w-10 min-h-10`} xmlns="http://www.w3.org/2000/svg" width="40" height="40"
            viewBox="0 0 40 40"
            fill="none">
            <path d="M5.83333 12.5H34.1667M5.83333 20H29.1667M5.83333 27.5H34.1667" stroke="#FDFDFD"
                  stroke-width="1.66667" stroke-linecap="round" />
          </svg>
          <div className={`items-center gap-7 hidden bp-1042:flex`}>
            <Link href={` tel:+1-234-567-8901`} label={`Contact me`} />
            <Link shouldOpenNewTab href={OLENAS_INSTAGRAM}
                  showArrowIcon
                  label={`My Instagram`} mode={`highlighted`} />
          </div>
        </div>
      </header>
    </>
  );
}

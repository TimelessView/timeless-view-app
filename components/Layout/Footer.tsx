// 'use client';

/*type FooterType = {
  // children: ReactNode;
}*/

import InstagramIcon from '@/components/UI/InstagramIcon';
import { OLENAS_INSTAGRAM } from '@/utils/variables';
import Link from 'next/link';

export default function Footer(/*{  }: FooterType*/) {
  const today = new Date();
  return (
    <footer className={`w-full max-w-screen-xl m-auto flex flex-col px-9 lg::px-0`}>
      <div className={`flex items-center md:justify-between flex-col md:flex-row gap-9 bp-828:gap-0`}>
        <p className={`sm:text-left text-center text-xl sm:text-2xl text-zinc-200`}>Contact me at <a
          href="mailto:timelessview24@gmail.com"
          className={`underline`}>timelessview24@gmail.com</a>
        </p>
        <Link target={`_blank`} href={OLENAS_INSTAGRAM}
              className={`flex items-center bp-828:gap-5 mb-5 bp-828:mb-0 uppercase font-italiana bp-1343::text-[44px] text-2xl text-zinc-500
           transition-all duration-200 hover:text-white active:text-zinc-600`}>
          <InstagramIcon />
          my instagram
        </Link>
      </div>
      <h2 className={`bp-1343:text-[189px] mt-10 sm:text-nowrap text-6xl m-auto uppercase font-italiana text-center
      text-zinc-500
      transition-all duration-300 hover:text-white active:text-zinc-500`}>timeless
        view</h2>
      <div
        className={`flex items-center justify-between text-center sm:text-left text-zinc-700 mb-11 m-auto bp-828:mr-auto`}>
        <p className={`text-sm bp-828:text-normal mt-4 bp-828:mt-0`}>
          © {today.getFullYear()} Timeless View. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type NavLinkType = {
  label: string;
  href: string;
  span: string;
  active?: boolean;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'a'>;

export default function NavLink({ label, span, href, active = true, ...props }: NavLinkType) {
  return (
    <>
      <div className={`flex items-center justify-between ${!active ? `text-zinc-700` : ``}`}>
        <a {...props} className={`${active ? `font-bold` : `font-semibold`} sm:text-6xl text-3xl
        transition-all duration-200 hover:text-white w-fit`} href={href}>{label}</a>
        <span className={`font-semibold sm:text-6xl text-3xl w-fit ${!active ? `text-zinc-900` : ``}`}>{span}</span>
      </div>
    </>
  );
}

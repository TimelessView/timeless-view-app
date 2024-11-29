// 'use client';

import { ComponentPropsWithoutRef } from 'react';

type BtnSmallType = {
  label: string;
  customClasses?: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

export default function BtnSmall({ label, customClasses, ...props }: BtnSmallType) {
  return (
    <>
      <button
        {...props}
        className={`${customClasses} transform -translate-y-1/2 text-white bg-zinc-900 px-3 py-2 rounded-full
                  transition-all duration-200 active:text-slate-950 active:bg-gray-50
                   hover:text-slate-950 hover:bg-gray-50`}>Prev
      </button>
    </>
  );
}

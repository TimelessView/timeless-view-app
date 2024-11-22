import { ComponentPropsWithoutRef } from 'react';

type FormButtonType = {
  label: string;
  // children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

function FormButton({ label, ...props }: FormButtonType) {
  return (
    <>
      <button {...props}
              className={`uppercase font-federo text-nowrap sm:text-3xl text-2xl border border-zinc-50 sm:px-32 py-7 sm:w-fit w-full
              transition-all duration-200 hover:text-yellow-500 hover:border-yellow-500
              active:text-zinc-600 active:border-zinc-600`}>{label}</button>
    </>
  );
}

export default FormButton;

import { type ReactNode } from 'react';
import Paragraph from '@/components/Typography/Paragraph';

interface HeadingAndLabelType {
  heading: ReactNode;
  label: ReactNode;
  // children: ReactNode;
}

function HeadingAndLabel({ heading, label }: HeadingAndLabelType) {
  return (
    <>
      <div className={`pb-6 border-b border-b-zinc-500`}>
        <span className={`uppercase text-4xl font-medium inline-block mb-5 text-zinc-500`}>{heading}</span>
        <Paragraph text={(
          label
        )} />
      </div>
    </>
  );
}

export default HeadingAndLabel;

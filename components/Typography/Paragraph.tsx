import { type ReactNode } from 'react';

interface ParagraphType {
  text: ReactNode;
  customClasses?: string;
  // children: ReactNode;
}

function Paragraph({ text, customClasses = `max-w-screen-sm` }: ParagraphType) {
  return (
    <p className={`${customClasses} leading-relaxed sm:text-sm`}>{text}</p>
  );
}

export default Paragraph;

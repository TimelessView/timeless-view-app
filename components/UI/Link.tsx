import { motion } from 'framer-motion';
import { useState } from 'react';
import ArrowIcon from '@/components/UI/ArrowIcon';

type LinkType = {
  mode?: 'default' | 'highlighted';
  label: string;
  href: string;
  showArrowIcon?: boolean;
  shouldOpenNewTab?: boolean;
}

export default function Link({
                               mode = `default`,
                               label,
                               href,
                               showArrowIcon = false,
                               shouldOpenNewTab = false
                             }: LinkType) {
  const defaultStyles = `flex items-center gap-2`;
  const highlightedStyles = `flex items-center gap-2 border border-zinc-50 py-2 px-5 font-medium group hover:text-yellow-400 
  transition-all duration-150 hover:border-yellow-400`;

  const [arrowColor, setArrowColor] = useState<`white` | `yellow`>(`white`);

  const chosenStyles = mode === 'highlighted' ? highlightedStyles : defaultStyles;
  // rgb(250, 204, 21)
  return (
    <motion.a
      whileHover={{ color: `rgb(250, 204, 21)`, scale: 1.14 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setArrowColor(`yellow`)}
      onHoverEnd={() => setArrowColor(`white`)}
      target={shouldOpenNewTab ? '_blank' : '_self'} href={href}
      className={`${chosenStyles} transition-all duration-150`}>
      <span className="">{label}</span>
      {showArrowIcon && (
        <ArrowIcon color={arrowColor} style={`small`} />
      )}
    </motion.a>
  );
}

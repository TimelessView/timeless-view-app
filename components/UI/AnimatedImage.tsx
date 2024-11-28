interface AnimatedImageType {
  src: string;
  alt: string;
  // children: ReactNode;
}

import { motion } from 'framer-motion';

function AnimatedImage({ src, alt }: AnimatedImageType) {
  return (
    <div>
      <motion.img
        // whileHover={{ scale: 1.05, rotate: 4 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        src={src} alt={alt} className={`sm:w-[80%] w-full sm:min-h-52 sm:min-w-36`} draggable={false} />
    </div>
  );
}

export default AnimatedImage;

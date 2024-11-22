'use client';

/* interface VideoGraphySectionType {
  // children: ReactNode;
} */

import { motion } from 'framer-motion';
import Heading from '@/components/Typography/Heading';
import HighlightLetter from '@/components/Typography/HighlightLetter';
import Paragraph from '@/components/Typography/Paragraph';
import HighlightText from '@/components/Typography/HighlightText';
import Videography from '@/components/Layout/Videography';
import Tooltip from '@/components/Layout/Tooltip';

function VideoGraphySection(/*{  }: VideoGraphySectionType*/) {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`mb-14`}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className={`w-full max-w-screen-xl px-4 sm:px-9 m-auto flex flex-col gap-9`} id={`videoGallery`}>
          <Heading heading={(
            <div>
              <HighlightLetter text={`T`} />he <HighlightLetter text={`V`} />ideography <br />
              I am proud to <HighlightLetter text={`S`} />how
            </div>
          )} />
          <div className={`mr-auto mb-12`}>
            <Paragraph text={(
              <>
                From captivating brand stories to heartfelt personal narratives, my videos are crafted to <HighlightText
                text={`inspire,
                engage, and leave a lasting impact.`} highlightColor={`yellow`} /></>
            )} />
          </div>
        </motion.div>
        <Videography />
        <Tooltip label={`Scroll to the right to see more`} />
      </motion.section>
    </>
  );
}

export default VideoGraphySection;

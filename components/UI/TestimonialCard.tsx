import { AnimatePresence, motion } from 'framer-motion';
import Paragraph from '@/components/Typography/Paragraph';

interface TestimonialCardType {
  title: string;
  quote: string;
  imgSrc: string;
  initials: string;
  date: string;
  // children: ReactNode;
}

function TestimonialCard({ title, quote, imgSrc, date, initials }: TestimonialCardType) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`max-w-screen-sm sm:min-w-[530px] px-3 sm:px-0`}>
        <h2 className={`text-5xl font-italiana uppercase mb-8`}>{title}</h2>
        <div className={`mb-9`}>
          <Paragraph customClasses={`max-w-screen-sm text-zinc-300`} text={(
            <>
              &#34;{quote}&#34;
            </>
          )} />
        </div>
        <div className={`flex items-center gap-4`}>
          <div>
            <img src={imgSrc} alt="User Icon 1" />
          </div>
          <div className={`flex flex-col gap-1`}>
            <h3 className={`font-italiana text-2xl`}>{initials}</h3>
            <p className={`text-zinc-600 text-sm`}>{date}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TestimonialCard;

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ServiceLabel from '@/components/UI/ServiceLabel';
import scrollTo from '@/utils/functions/scrollTo';
import { MyServicesSectionType } from '@/components/Layout/Sections/MyServicesSection';

interface ServiceContainerType {
  label: MyServicesSectionType;
  number: string;
  content: ReactNode;
  open: boolean;
  setActive: (label: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function ServiceContainer({ label, number, content, open, setActive }: ServiceContainerType) {
  const chosenFillSvg = open ? `#fff` : `#757575`;

  function handleSetOpen(label: MyServicesSectionType) {
    if (!open) {
      scrollTo(`myServices`);
    }
    return open ? setActive(false) : setActive(label);
  }

  return (
    <>
      <div>
        <div className={`flex items-center justify-between cursor-pointer`}
             onClick={() => handleSetOpen(label)}>
          <ServiceLabel active={open} label={label} number={number} />
          <div className={open ? `-rotate-180` : ``}>
            <svg className={`w-[16] h-[8px] sm:w-[20px] sm:h-[12px]`} xmlns="http://www.w3.org/2000/svg" width="20"
                 height="12"
                 viewBox="0 0 20 12" fill="none">
              <path
                d="M17.7168 0.000445166L10.2842 7.41687L2.85154 0.000443867L0.568314 2.28367L10.2842 11.9995L20 2.28367L17.7168 0.000445166Z"
                fill={chosenFillSvg} />
            </svg>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: 100 }}
                className={`ml-4 mt-14`}>
                {content}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ServiceContainer;

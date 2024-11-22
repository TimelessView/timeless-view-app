/* interface MyServicesSectionType {
  // children: ReactNode;
} */

import { useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/Typography/Heading';
import HighlightLetter from '@/components/Typography/HighlightLetter';
import ServiceContainer from '@/components/Layout/ServiceContainer';
import ConsultationService from '@/components/Layout/Services/ConsultationService';
import PhotographyServiceContainer from '@/components/Layout/Services/PhotographyServiceContainer';
import VideographyServiceContainer from '@/components/Layout/Services/VideographyServiceContainer';


export type MyServicesSectionType = `consultation` | `photography` | `videography`;

function MyServicesSection(/*{  }: MyServicesSectionType*/) {
  const [openedService, setOpenedService] = useState<MyServicesSectionType | false>(false);
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={`w-full max-w-screen-xl px-4 bp-828:px-9 m-auto flex flex-col gap-9 mb-36`}>
      <div className={`uppercase sm:mb-20 mb-4`} id={`myServices`}>
        <Heading heading={(
          <>
            <HighlightLetter text={`M`} />y <HighlightLetter text={`S`} />ervices
          </>
        )} />
      </div>
      <div className={`flex flex-col justify-center gap-11 max-w-screen-sm`}>
        <ServiceContainer
          number={`01`}
          open={openedService === `consultation`}
          setActive={setOpenedService}
          label={`consultation`}
          content={(
            <>
              <ConsultationService />
            </>
          )}
        />
        <PhotographyServiceContainer openedService={openedService} setOpenedService={setOpenedService} />
        <VideographyServiceContainer openedService={openedService} setOpenedService={setOpenedService} />
      </div>
    </motion.section>
  );
}

export default MyServicesSection;

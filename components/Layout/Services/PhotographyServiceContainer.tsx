'use client';

import { useState } from 'react';
import CustomModal from '@/components/Modal/CustomModal';
import FillInForm from '@/components/Form/FillInForm';
import PhotographyService from '@/components/Layout/Services/PhotographyService';
import FormButton from '@/components/UI/FormButton';
import ServiceContainer from '@/components/Layout/ServiceContainer';
import { MyServicesSectionType } from '@/components/Layout/Sections/MyServicesSection';

interface PhotographyServiceContainerType {
  openedService: MyServicesSectionType | false;
  setOpenedService: (value: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function PhotographyServiceContainer({ openedService, setOpenedService }: PhotographyServiceContainerType) {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  return (
    <>
      {formOpen && (
        <>
          <CustomModal content={(
            <>
              <FillInForm onClose={setFormOpen} mode={`photography`} />
              {/*<SuccessModal onClose={setFormOpen} />*/}
              {/*<ErrorModal errorMessage={`Something went wrong while submitting your form. Please try again.*/}
              {/*If the issue persists, check your internet connection or contact me for assistance. I am here to help!`}*/}
              {/*            onClose={setFormOpen} />*/}

            </>
          )} open={formOpen} setOpen={setFormOpen} />
        </>
      )}
      <ServiceContainer
        number={`02`}
        open={openedService === `photography`}
        setActive={setOpenedService}
        label={`photography`}
        content={(
          <>
            <PhotographyService />
            <div className={`mt-20 mb-7`}>
              <FormButton onClick={() => setFormOpen(true)} label={`book now!`} />
            </div>

          </>
        )}
      />
    </>
  );
}

export default PhotographyServiceContainer;

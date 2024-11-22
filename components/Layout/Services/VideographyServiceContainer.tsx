'use client';

import { useState } from 'react';
import { MyServicesSectionType } from '@/components/Layout/Sections/MyServicesSection';
import CustomModal from '@/components/Modal/CustomModal';
import FillInForm from '@/components/Form/FillInForm';
import ServiceContainer from '@/components/Layout/ServiceContainer';
import VideographyService from '@/components/Layout/Services/VideographyService';
import FormButton from '@/components/UI/FormButton';

interface VideographyServiceContainerType {
  openedService: MyServicesSectionType | false;
  setOpenedService: (value: MyServicesSectionType | false) => void;
  // children: ReactNode;
}

function VideographyServiceContainer({ openedService, setOpenedService }: VideographyServiceContainerType) {
  const [formOpen, setFormOpen] = useState<boolean>(false);
  return (
    <>
      {formOpen && (
        <>
          <CustomModal content={(
            <>
              <FillInForm onClose={setFormOpen} mode={`videography`} />
            </>
          )} open={formOpen} setOpen={setFormOpen} />
        </>
      )}
      <ServiceContainer
        number={`03`}
        open={openedService === `videography`}
        setActive={setOpenedService}
        label={`videography`}
        content={(
          <>
            <VideographyService />
            <div className={`mt-20 mb-7`}>
              <FormButton onClick={() => setFormOpen(true)} label={`book now!`} />
            </div>
          </>
        )}
      />
    </>
  );
}

export default VideographyServiceContainer;

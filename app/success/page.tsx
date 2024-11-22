'use client';
/* interface SuccessPageType {
  // children: ReactNode;
} */

import { useState } from 'react';
import CustomModal from '@/components/Modal/CustomModal';
import SuccessModal from '@/components/Modal/SuccessModal';

function SuccessPage(/*{  }: SuccessPageType*/) {
  const [formOpen, setFormOpen] = useState<boolean>(true);

  // get rid of any parameters in the URL
  if (typeof window !== `undefined`) {
    window.history.replaceState({}, document.title, `/success`);
  }

  return (
    <>
      {formOpen && (
        <>
          <CustomModal content={(
            <>
              <SuccessModal onClose={setFormOpen} />
            </>
          )} open={formOpen} setOpen={setFormOpen} />
        </>
      )}
    </>
  );
}

export default SuccessPage;
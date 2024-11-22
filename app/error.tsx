'use client';

import { useState } from 'react';
import CustomModal from '@/components/Modal/CustomModal';
import ErrorModal from '@/components/Modal/ErrorModal';

interface ErrorPageInterface {
  error: { message: string };
}

export default function ErrorPage({ error }: ErrorPageInterface) {
  const [formOpen, setFormOpen] = useState<boolean>(true);
  return (
    <div>
      <CustomModal content={(
        <>
          <ErrorModal errorMessage={process.env.NODE_ENV === `development` ? error.message : `Something went wrong here! Please try again.
          If the issue persists, check your internet connection or contact me for assistance. I am here to help!`}
                      onClose={setFormOpen} />

        </>
      )} open={formOpen} setOpen={setFormOpen} />
    </div>
  );
}

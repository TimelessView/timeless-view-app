'use client';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: `80%`,
  height: `90%`,
  bgcolor: 'rgb(9, 9, 11)',
  border: '1px solid #fff',
  borderRadius: `16px`,
  boxShadow: 24,
  p: 4,
  overflowY: `scroll`,
  scrollbarWidth: `thin`,
  '@media (max-width: 37.5rem)': {
    width: `100vw`,
    height: `100vh`,
    borderRadius: `0`,
    border: `none`,
    p: `1rem`
  }
};

type CustomModalProps = {
  content: ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function CustomModal({ content, open, setOpen }: CustomModalProps) {
  return createPortal(
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{
          backdrop: {
            sx: { backgroundColor: `rgba(0, 0, 0, 0.8)` }
          }
        }}
      >
        <Box sx={style}>
          {content}
        </Box>
      </Modal>
    </div>, document.getElementById(`form`) as HTMLElement
  );
}

import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  full?: boolean;
  onClose: () => void;
  height?: number;
  type?: 'bottom' | 'dialog';
};

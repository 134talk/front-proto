import { useState } from 'react';

export interface ModalActions {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export default function useModal(initialState = false): ModalActions {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, open, close };
}

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ModalProps } from './types';

const Modal = ({
  children,
  open,
  onClose = () => {},
  height,
  full,
  type = 'bottom'
}: ModalProps) => {
  const animationType: {[key: string]: object} = {
    bottom: {
      enter: 'transform transition ease-in-out duration-500 sm:duration-700',
      enterFrom: 'translate-y-full',
      enterTo: 'translate-y-0',
      leave: 'transform transition ease-in-out duration-500 sm:duration-700',
      leaveFrom: 'translate-y-0',
      leaveTo: 'translate-y-full'
    },
    dialog: {
      enter: 'transform transition ease-out duration-300 sm:duration-500',
      enterFrom: 'opacity-0 scale-95',
      enterTo: 'opacity-100 scale-100',
      leave: 'transform transition ease-in duration-300 sm:duration-500',
      leaveFrom: 'opacity-100 scale-100',
      leaveTo: 'opacity-0 scale-95'
    }
  };

  const modalStyle: {[key: string]: string} = {
    bottom: 'bottom-0',
    dialog: 'bottom-0 top-0 left-0 right-0 m-4 items-center'
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="section"
        className="fixed inset-0 z-10 overflow-hidden"
        onClose={onClose}
      >
        <section className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute bg-black opacity-30 inset-0" />

          <section className={`fixed flex ${modalStyle[type]}`}>
            <Transition.Child as={Fragment} {...animationType[type]}>
              <section className="w-screen">
                <section
                  className={`w-full flex flex-col py-6 bg-white shadow-xl ${full ? 'h-screen' : ''}`}
                  style={{ minHeight: height ?? 356 }}
                >
                  <section className="relative flex-1 px-4 sm:px-6">
                    {children}
                  </section>
                </section>
              </section>
            </Transition.Child>
          </section>
        </section>
      </Dialog>
    </Transition.Root>
  );
};

export type { ModalProps };

export default Modal;

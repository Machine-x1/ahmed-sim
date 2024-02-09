import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export default function ModalPop({ isOpen, onOpenChange }: any) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        closeButton
        // onClose={}
        backdrop="opaque"
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="mb-4 flex flex-col gap-1 text-xl font-semibold text-green-600">
              Payment successful!
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center justify-center gap-12">
                <Image
                  src="/images/success.svg"
                  width={100}
                  height={100}
                  alt="success"
                />
                <p className="mb-4  text-center">
                  Thank you for your payment. Your transaction was successful
                </p>
              </div>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

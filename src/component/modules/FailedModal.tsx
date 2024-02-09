import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function FailedModal({
  isOpen,
  onOpenChange,
  onOpen,
  onClose,
}: {
  isOpen: any;
  onOpenChange: any;
  onOpen: any;
  onClose: any;
}) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* <Button onPress={onOpen}>Open Modal</Button> */}
      <Modal
        closeButton
        // onClose={}
        backdrop="opaque"
        isOpen={true}
        // size="4xl"
        onClose={onClose}
        defaultOpen
        placement="center"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="mb-4 flex flex-col gap-1 text-xl font-semibold text-red-600 ">
              Payment Failed{" "}
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center justify-center gap-12">
                <Image
                  src="/images/error.svg"
                  width={100}
                  height={100}
                  alt="error"
                />

                <p className="mb-4 text-center text-gray-700">
                  We&apos;re sorry, but there was an issue processing your
                  payment.
                </p>
              </div>
              <button>Close</button>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

import { DSButton, DSModal, DSSuccessModal } from "@/components";
import { useState } from "react";

export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  return (
    <>
      <div>
        <DSButton onClick={() => setIsModalOpen(true)}>
          Open Modal Button
        </DSButton>
        <DSModal
          title={"Testing"}
          open={isModalOpen}
          closeIcon
          handleOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
          handleClose={() => setIsModalOpen(false)}
          IsFooter
          handleContent={"Apply"}
        >
          <h2>This Is The Demo Modal</h2>
        </DSModal>
      </div>
      <div>
        <DSButton onClick={() => setIsSuccessOpen(true)}>
          Open Success Modal Button
        </DSButton>
        <DSSuccessModal
          open={isSuccessOpen}
          handleClose={() => setIsSuccessOpen(false)}
        />
      </div>
    </>
  );
};

import { DSButton, DSModal } from "@/components";
import { useState } from "react";
import { DeleteModal } from "../../../components/DSModalComponents/ModalTemplate";

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
          Open Delete Number Modal
        </DSButton>
        <DeleteModal
          Title={"Delete Number?"}
          isModalOpen={isSuccessOpen}
          handleClose={() => setIsSuccessOpen(false)}
        >
          Are you sure you want to delate this complain?
        </DeleteModal>
      </div>
    </>
  );
};

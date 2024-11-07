import { DSModal } from "../../..";

export const DeleteModal = ({
  handleOk,
  onCancel,
  children,
  handleClose,
  Title,
  isModalOpen,
}) => {
  return (
    <DSModal
      title={Title}
      open={isModalOpen}
      handleOk={handleOk}
      onCancel={onCancel}
      handleClose={handleClose}
      IsFooter
      disabledButton={false}
      handleContent={"Delete"}
      danger={true}
    >
      <h6 className="lh-base clr-gray fw-normal">{children}</h6>
    </DSModal>
  );
};

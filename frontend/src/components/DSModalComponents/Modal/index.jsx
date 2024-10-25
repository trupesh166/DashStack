import { Modal } from "antd";
import { clsx } from "clsx";
import { DSButton } from "@/components";
import Icons from "@/constants/Icons";
import styles from "./DSModal.module.css";

export const DSModal = ({
  open,
  title,
  width,
  children,
  className,
  handleClose,
  handleOk,
  contentClassName,
  closeOnOutsideClick,
  handleCancel,
  handleContent,
  IsCloseIcon = false,
  IsFooter = false,
  ...rest
}) => {
  const finalClassName = {
    body: styles.body,
    content: clsx(styles.content, contentClassName),
    header: styles.header,
    footer: styles.footer,
    mask: styles.mask,
  };

  return (
    <Modal
      classNames={finalClassName}
      rootClassName={styles.modalParent}
      open={open}
      className={clsx(styles.modal, className)}
      title={title}
      onCancel={handleCancel}
      maskClosable={closeOnOutsideClick}
      width={width}
      footer={
        IsFooter &&
        (() => (
          <div className="d-flex align-items-center gap-xl justify-content-center">
            <DSButton block onClick={handleClose}>
              Cancel
            </DSButton>
            <DSButton block variant={"primary"} onClick={handleOk}>
              {handleContent}
            </DSButton>
          </div>
        ))
      }
      closeIcon={
        IsCloseIcon && (
          <div
            className={clsx(
              styles.closeBtn,
              "clr-black d-flex align-items-center"
            )}
          >
            {Icons.CloseCircle}
          </div>
        )
      }
      centered
      {...rest}
    >
      {children}
    </Modal>
  );
};

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
  danger,
  loading,
  IsBtnLoading,
  IsCloseIcon = false,
  IsFooter = false,
  disabledButton = true,
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
      title={<h3>{title}</h3>}
      onCancel={handleCancel}
      maskClosable={closeOnOutsideClick}
      width={width}
      loading={loading}
      footer={
        IsFooter &&
        (() => (
          <div
            className={clsx(
              styles.Footer,
              "d-flex align-items-center justify-content-center"
            )}
          >
            <DSButton block onClick={handleClose}>
              Cancel
            </DSButton>
            <DSButton
              block
              onClick={handleOk}
              disabled={disabledButton}
              variant={disabledButton == false ? "primary" : ""}
              danger={danger}
              loading={IsBtnLoading}
              type="submit"
            >
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

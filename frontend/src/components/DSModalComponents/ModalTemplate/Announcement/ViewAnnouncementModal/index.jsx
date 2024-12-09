import { Col, Row } from "antd";
import { DSModal } from "@/components/";
import clsx from "clsx";
import styles from "./ViewAnnouncementModal.module.css";

export const ViewAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  title,
  Description,
  date,
  time,
  ModalTitle,
}) => {
  return (
    <div>
      <DSModal
        title={ModalTitle}
        open={open}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleClose={handleClose}
        IsFooter={false}
      >
        <Row className="mb-4">
          <Col span={24}>
            <h5 className={styles.silver}>Title</h5>
          </Col>
          <Col>
            <h5 className={clsx(styles.dark, "word-break")}>{title}</h5>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col span={24}>
            <h5 className={styles.silver}>Description</h5>
          </Col>
          <Col>
            <h5 className={clsx(styles.dark, "word-break")}>{Description}</h5>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col span={12}>
            <h5 className={styles.silver}>Date</h5>
            <h5 className={clsx(styles.dark, "word-break")}>{date}</h5>
          </Col>
          <Col span={12}>
            <h5 className={styles.silver}>Time</h5>
            <h5 className={clsx(styles.dark, "word-break")}>{time}</h5>
          </Col>
        </Row>
      </DSModal>
    </div>
  );
};

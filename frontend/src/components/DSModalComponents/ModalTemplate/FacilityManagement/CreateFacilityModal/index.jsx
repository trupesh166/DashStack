import { DSDatePicker, DSInput, DSSelect, DSModal } from "@/components/";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";
import styles from "./CreateFacilityModal.module.css";

export const CreateFacilityModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  facilityName,
  description,
  scheduleDate,
  remindBefore,
  dateDefault,
  setFacilityName,
  setDescription,
  setScheduleDate,
  handleContent,
  title,
  setRemindBefore,
  isSubmitting,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleOk({
      facilityName,
      description,
      scheduleDate,
      remindBefore,
    });
  };

  const isFormValid =
    facilityName &&
    description &&
    scheduleDate &&
    remindBefore &&
    !isSubmitting;

  return (
    <div className={styles.createFacilityModal}>
      <DSModal
        title={title}
        open={open}
        closeIcon
        onCancel={handleCancel}
        handleClose={handleClose}
        handleOk={handleSubmit}
        IsFooter
        handleContent={handleContent}
        disabledButton={!isFormValid}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <DSInput
              label={"Facility Name"}
              placeholder={"Enter Name"}
              value={facilityName}
              onChange={(e) => setFacilityName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h5 className={styles.h5}>Description</h5>
            <TextArea
              placeholder="Enter Description"
              autoSize={{ minRows: 2, maxRows: 6 }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <DSDatePicker
              block
              type="Date"
              label={"Schedule Service Date"}
              placeholder={"Select Schedule Service Date"}
              value={scheduleDate}
              onChange={(date) => setScheduleDate(date)}
              defaultValue={dayjs(dateDefault, "YYYY-MM-DD")}
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "10px",
                padding: "0px 10px",
              }}
            />
          </div>

          <div className="mb-4">
            <DSSelect
              label={"Remind Before"}
              placeholder={"Select Day"}
              style={{ width: "100%", height: "45px", borderRadius: "10px" }}
              value={remindBefore}
              onChange={(value) => setRemindBefore(value)}
              options={[
                { label: "1 Day", value: "1 Day" },
                { label: "2 Days", value: "2 Day" },
                { label: "3 Days", value: "3 Day" },
                { label: "4 Days", value: "4 Day" },
                { label: "5 Days", value: "5 Day" },
              ]}
            />
          </div>
        </form>
      </DSModal>
    </div>
  );
};

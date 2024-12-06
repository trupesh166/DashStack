import React, { useState, useEffect } from "react";
import { DSDatePicker, DSInput, DSModal } from "@/components/";
import TextArea from "antd/es/input/TextArea";
import { Flex, TimePicker } from "antd";
import useDecodeToken from "@/hook/useDecodeToken";
import dayjs from "dayjs";

export const AddAnnouncementModal = ({
  open,
  handleCancel,
  handleClose,
  handleOk,
  editData,
}) => {
  const { societyId } = useDecodeToken();

  const [formData, setFormData] = useState({
    societyId: "",
    announcementTitle: "",
    announcementDescription: "",
    announcementDate: null,
    announcementTime: null,
  });

  useEffect(() => {
    if (editData) {
      const formattedDate = dayjs(editData?.announcementDate);
      const formattedTime = dayjs(editData?.announcementTime);

      setFormData({
        societyId: societyId || "",
        announcementTitle: editData?.announcementTitle || "",
        announcementDescription: editData?.announcementDescription || "",
        announcementDate: formattedDate.isValid() ? formattedDate : null,
        announcementTime: formattedTime.isValid() ? formattedTime : null,
      });
    } else {
      setFormData({
        societyId: societyId || "",
        announcementTitle: "",
        announcementDescription: "",
        announcementDate: null,
        announcementTime: null,
      });
    }
  }, [editData, societyId]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    handleOk(formData);
  };

  return (
    <DSModal
      title={editData ? "Edit Announcement" : "Add Announcement"}
      open={open}
      handleCancel={() => {
        setFormData({
          societyId: societyId || "",
          announcementTitle: "",
          announcementDescription: "",
          announcementDate: null,
          announcementTime: null,
        });
        handleCancel(); // Close the modal and reset form data
      }}
      handleClose={handleClose}
      handleOk={handleSave}
      IsFooter={true}
      handleContent={"Save"}
      disabledButton={
        !formData.announcementTitle ||
        !formData.announcementDescription ||
        !formData.announcementDate ||
        !formData.announcementTime
      }
    >
      {/* Announcement Title */}
      <DSInput
        className="mb-4"
        label="Announcement Title"
        placeholder="Enter Title"
        value={formData.announcementTitle}
        onChange={(e) => handleChange("announcementTitle", e.target.value)}
      />

      {/* Announcement Description */}
      <div className="mb-4">
        <h6>Announcement Description</h6>
        <TextArea
          placeholder="Enter Description"
          autoSize={{ minRows: 2, maxRows: 5 }}
          value={formData.announcementDescription}
          onChange={(e) =>
            handleChange("announcementDescription", e.target.value)
          }
        />
      </div>

      {/* Announcement Date & Time */}
      <Flex
        justify="space-between"
        align="center"
        gap="middle"
        className="mb-4"
      >
        <DSDatePicker
          block
          label="Date"
          placeholder="Select Date"
          value={formData.announcementDate}
          onChange={(value) => handleChange("announcementDate", value)}
        />
        <TimePicker
          use12Hours
          format="h:mm a"
          value={formData.announcementTime}
          onChange={(value) => handleChange("announcementTime", value)}
        />
      </Flex>
    </DSModal>
  );
};

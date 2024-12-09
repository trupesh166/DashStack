import React, { useEffect, useState } from "react";
import styles from "./CreateComplaintModal.module.css";
import { DSInput, DSModal, DSRadioButton, DSSelect } from "../../../..";
import TextArea from "antd/es/input/TextArea";
import { Flex } from "antd";
import { listUnit, listWing } from "@/axiosApi/ApiHelper";
import UseDecodeToken from "@/hook/UseDecodeToken";

export const CreateComplaintModal = ({
  open,
  handleOk,
  handleCancel,
  handleClose,
  formData,
  handleChange,
  isEdit,
}) => {
  const { societyId } = UseDecodeToken();

  const [wing, setWing] = useState([]);
  const [unit, setUnit] = useState([]);
  const [selectWingId, setSelectWingId] = useState(formData.wing || "");

  const GetWing = async () => {
    try {
      if (societyId) {
        const result = await listWing(societyId);
        if (result && result?.data) {
          const uniqueWings = result?.data.map((value) => ({
            value: value._id,
            label: value.wingName,
            key: value._id,
          }));
          setWing(uniqueWings);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const GetUnit = async () => {
    try {
      if (selectWingId) {
        const result = await listUnit(selectWingId);
        if (result && result?.data) {
          const uniqueUnits = result?.data.map((value) => ({
            value: value._id,
            label: value.unitNumber,
            key: value._id,
          }));
          setUnit(uniqueUnits);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetUnit();
  }, [selectWingId]);

  useEffect(() => {
    GetWing();
  }, [societyId, open]);
  useEffect(() => {
    if (formData.wing) {
      setSelectWingId(formData.wing);
      GetUnit();
    }
  }, [formData.wing]);

  const handleModalClose = () => {
    setWing([]);
    setUnit([]);
    handleCancel();
  };

  return (
    <div className={styles.createComplaint}>
      <DSModal
        title={isEdit ? "Edit Complaint" : "Create Complaint"}
        open={open}
        closeIcon
        handleOk={() => handleOk("Complain")}
        onCancel={handleModalClose}
        handleClose={handleModalClose}
        IsFooter
        handleContent={isEdit ? "Edit" : "Create"}
        disabledButton={false}
      >
        <DSInput
          className="mb-4"
          label={"Complainer Name"}
          placeholder={"Enter Name"}
          value={formData?.complainerName}
          onChange={(e) => handleChange("complainerName", e.target.value)}
        />

        <DSInput
          className="mb-4"
          label={"Complaint Name"}
          placeholder={"Enter Complaint Name"}
          value={formData?.complaintName}
          onChange={(e) => handleChange("complaintName", e.target.value)}
        />

        <div className="mb-4">
          <h5 className={styles.h5}>Description</h5>
          <TextArea
            placeholder="Enter Description"
            value={formData?.description}
            onChange={(e) => handleChange("description", e.target.value)}
            autoSize={{
              minRows: 1.5,
              maxRows: 6,
            }}
          />
        </div>

        <Flex justify="space-between" gap={8} className="mb-4">
          <DSSelect
            label={"Wing"}
            placeholder={"Select Wing"}
            options={wing.map((option) => ({
              ...option,
              key: option.key || option.value,
            }))}
            require={true}
            name="wing"
            value={formData?.wing}
            onChange={(value) => {
              setSelectWingId(value);
              handleChange("wing", value);
            }}
          />
          <DSSelect
            label={"Unit"}
            placeholder={"Select Unit"}
            options={unit}
            require={true}
            name="unit"
            value={formData?.unit}
            onChange={(value) => handleChange("unit", value)}
          />
        </Flex>

        <DSRadioButton
          className="mb-4"
          block
          label={"Priority"}
          options={[
            { label: "High", value: "High" },
            { label: "Medium", value: "Medium" },
            { label: "Low", value: "Low" },
          ]}
          value={formData?.priority}
          onChange={(e) => handleChange("priority", e.target.value)}
          optionType={"button"}
        />

        <DSRadioButton
          className="mb-4"
          block
          label={"Status"}
          options={[
            { label: "Open", value: "Open" },
            { label: "Pending", value: "Pending" },
            { label: "Solve", value: "Solve" },
          ]}
          value={formData?.status}
          onChange={(e) => handleChange("status", e.target.value)}
          optionType={"button"}
          type={"radio"}
        />
      </DSModal>
    </div>
  );
};

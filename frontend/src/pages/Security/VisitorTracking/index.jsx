import React, { useState, useEffect } from "react";
import {
  AddVisitorDetailsModal,
  DSButton,
  DSCard,
  DSSelect,
  DSTable,
} from "@/components";
import Icons from "@/constants/Icons";
import { Avatar, Flex } from "antd";
import { useAddVisitorDetails, useListVisitorDetails } from "@/hook/Security";

export const VisitorTracking = () => {
  const columns = [
    {
      title: "Visitor Name",
      dataIndex: "visitorName",
      key: "visitorName",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.avatar} width="40" style={{ marginRight: 8 }} />
          {text}
        </div>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
    },
    {
      title: "Unit Number",
      dataIndex: "unit",
      key: "unit",
      render: (unit) => (
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <Avatar
            style={{
              backgroundColor: "var(--clr-pearl)",
              color: "var(--clr-cult)",
            }}
          >
            {unit?.wingName?.charAt(0)}
          </Avatar>
          {unit?.unitNumber}
        </div>
      ),
      align: "center",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      align: "center",
    },
  ];

  const { submitVisitorDetails } = useAddVisitorDetails();
  const { visitorDetails, refetchVisitorDetails } = useListVisitorDetails();
  const [addVisitorDetailsModal, setAddVisitorDetailsModal] = useState(false);

  const handleModalSubmit = async (formData) => {
    try {
      await submitVisitorDetails(formData, refetchVisitorDetails);
      setAddVisitorDetailsModal(false);
    } catch (error) {
      console.error("Error submitting visitor details:", error);
    }
  };

  return (
    <>
      <DSCard
        title="Visitor Tracking"
        headerContent={
          <Flex align="center" gap={"middle"}>
            <DSSelect
              defaultValue="Week"
              options={[
                { label: "Day", value: "Day" },
                { label: "Week", value: "Week" },
                { label: "Month", value: "Month" },
              ]}
            />
            <DSButton
              icon={Icons.AddSquare}
              variant={"primary"}
              onClick={() => setAddVisitorDetailsModal(true)}
            >
              Add Visitor Details
            </DSButton>
          </Flex>
        }
      >
        <DSTable
          dataSource={visitorDetails}
          tableColumn={columns}
          pagination={{
            pageSize: 10,
          }}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "table-row-light" : "table-row-dark"
          }
        />
      </DSCard>

      {addVisitorDetailsModal && (
        <AddVisitorDetailsModal
          open={addVisitorDetailsModal}
          handleCancel={() => setAddVisitorDetailsModal(false)}
          handleClose={() => setAddVisitorDetailsModal(false)}
          handleOk={(formData) => handleModalSubmit(formData)}
        />
      )}
    </>
  );
};

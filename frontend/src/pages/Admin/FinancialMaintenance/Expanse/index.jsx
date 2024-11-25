import { Space, Tag, Tooltip } from "antd";
import { DSButton, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { useState } from "react";
import { AddExpensesDetailsModal, DeleteModal, EditExpensesModal, ViewExpenseDetailsModal } from "../../../../components";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    ellipsis: {
      showTitle: false,
    },
    render: (description) => (
      <Tooltip placement="topLeft" title={description}>
        {description}
      </Tooltip>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (amount) => <span style={{ color: "green" }}>₹ {amount}</span>,
  },
  {
    title: "Bill Format",
    dataIndex: "billFormat",
    key: "billFormat",
    render: (format) => (
      <Tag
        icon={format === "PDF" ? Icons.Pdf : Icons.Jpg}
        color={format === "PDF" ? "volcano" : "geekblue"}
      >
        {format}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <DSButton
          type="primary"
          size="small"
          icon={Icons.Edit}
          className="clr-success"
        />
        <DSButton
          type="primary"
          size="small"
          icon={Icons.EyeShow}
          className="clr-cult"
        />
        <DSButton
          type="primary"
          size="small"
          icon={Icons.Trash}
          className="clr-danger"
        />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    title: "Rent or Mortgage",
    description: "A visual representation of your spending categories...",
    date: "10/02/2024",
    amount: 1000,
    billFormat: "JPG",
  },
  {
    key: "2",
    title: "Housing Costs",
    description: "Track the fluctuations in your spending over we time...",
    date: "11/02/2024",
    amount: 1000,
    billFormat: "PDF",
  },
  {
    key: "3",
    title: "Property Taxes",
    description: "Easily compare your planned budget against we your...",
    date: "12/02/2024",
    amount: 1000,
    billFormat: "JPG",
  },
];

export const Expense = () => {

  const [addExpensesModalOpen, setAddExpensesModalOpen] = useState(false);
  const [editExpensesModalOpen, setEditExpensesModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteComplaint, setDeleteComplaint] = useState(false);

  return (
    <div>
      <DSCard
        title={"Add Expenses Details"}
        icon={Icons.AddSquare}
        buttonContent={`Add New Expenses details`}
        button={true}
        onClick={() => setAddExpensesModalOpen(true)}
      >
        <DSTable tableColumn={columns} dataSource={data} pagination={false} />

      </DSCard>
      <div>
        {/* Add Expense Modal */}
        <AddExpensesDetailsModal
          open={addExpensesModalOpen}
          handleOk={() => setAddExpensesModalOpen(false)}
          handleCancel={() => setAddExpensesModalOpen(false)}
          handleClose={() => setAddExpensesModalOpen(false)}
        />

        {/* Edit Expense Modal */}
        <EditExpensesModal
          open={editExpensesModalOpen}
          handleOk={() => setEditExpensesModalOpen(false)}
          handleCancel={() => setEditExpensesModalOpen(false)}
          handleClose={() => setEditExpensesModalOpen(false)}
        />

        {/* View Expense Modal */}
        <ViewExpenseDetailsModal
          open={viewModalOpen}
          handleOk={() => setViewModalOpen(false)}
          handleCancel={() => setViewModalOpen(false)}
          handleClose={() => setViewModalOpen(false)}
        />

        {/* Remove Expense Modal */}
        <DeleteModal
          title={"Delete Expense?"}
          isModalOpen={deleteComplaint}
          handleClose={() => setDeleteComplaint(false)}
          handleOk={() => setDeleteComplaint(false)}
          onCancel={() => setDeleteComplaint(false)}
          children={"Are you sure you want to delate this?"}
        />

      </div>
    </div>
  );
};

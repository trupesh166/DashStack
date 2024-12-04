import { useState } from "react";
import { Space, Tag, Tooltip } from "antd";
import {
  DSButton,
  DSCard,
  DSTable,
  AddExpensesDetailsModal,
  DeleteModal,
  ViewExpenseDetailsModal,
} from "@/components";
import Icons from "@/constants/Icons";
import {
  useViewExpanse,
  useDeleteExpanse,
} from "@/hook/Admin/FinancialMaintenance/Expenses";

export const Expense = () => {
  const { tableData, isLoading, fetchData } = useViewExpanse();

  const {
    deleteComplaint,
    setDeleteComplaint,
    selectedExpense,
    setSelectedExpense,
    handleDelete,
  } = useDeleteExpanse(fetchData);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "discription",
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
      dataIndex: "billDocument",
      key: "billFormat",
      render: (data) => {
        return (
          <Tag
            icon={data?.format === "pdf" ? Icons.Pdf : Icons.Jpg}
            color={data?.format === "pdf" ? "volcano" : "geekblue"}
          >
            {data?.format}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Edit}
            className="clr-success"
            onClick={() => openEditModal(record)}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.EyeShow}
            className="clr-cult"
            onClick={() => handleViewClick(record)}
          />
          <DSButton
            type="primary"
            size="small"
            icon={Icons.Trash}
            className="clr-danger"
            onClick={() => handleDeleteClick(record)} // Show modal for delete
          />
        </Space>
      ),
    },
  ];

  const [addExpensesModalOpen, setAddExpensesModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleViewClick = (expense) => {
    setSelectedExpense(expense);
    setViewModalOpen(true);
  };

  const handleDeleteClick = (expense) => {
    setSelectedExpense(expense);
    setDeleteComplaint(true);
  };

  return (
    <div>
      <DSCard
        title={"Add Expenses Details"}
        headerContent={
          <DSButton
            variant={"primary"}
            icon={Icons.AddSquare}
            // onClick={openCreateModal}
          >
            Add New Expenses details
          </DSButton>
        }
      >
        <DSTable
          tableColumn={columns}
          dataSource={tableData}
          loading={isLoading}
          pagination={false}
        />
      </DSCard>
      <div>
        {/* Add Expense Modal */}
        <AddExpensesDetailsModal
          // open={isModalOpen}
          // handleOk={handleSubmit}
          // handleCancel={closeModal}
          // handleClose={closeModal}
          // isEdit={isEdit}
          addExpensesDetails={{
          //   title,
          //   description,
          //   date,
          //   amount,
          //   bill,
          }}
          setAddExpensesDetails={{
            // setTitle,
          //   setDescription,
          //   setDate,
          //   setAmount,
          //   handleFileChange,
          //   handleFileRemove,
          }}
        />

        {/* View Expense Modal */}
        <ViewExpenseDetailsModal
          open={viewModalOpen}
          handleOk={() => setViewModalOpen(false)}
          handleCancel={() => setViewModalOpen(false)}
          handleClose={() => setViewModalOpen(false)}
          expense={selectedExpense}
          title={selectedExpense?.title}
          Description={selectedExpense?.description}
          Date={selectedExpense?.date}
          Amount={selectedExpense?.amount}
        />

        {/* Remove Expense Modal */}
        <DeleteModal
          title={"Delete Expense?"}
          isModalOpen={deleteComplaint}
          handleClose={() => setDeleteComplaint(false)}
          handleOk={handleDelete}
          onCancel={() => setDeleteComplaint(false)}
          children={"Are you sure you want to delete this?"}
        />
      </div>
    </div>
  );
};

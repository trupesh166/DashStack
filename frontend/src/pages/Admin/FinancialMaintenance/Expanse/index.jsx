import { Space, Tag, Tooltip } from "antd";
import { DSButton, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { useState } from "react";
import { AddExpensesDetailsModal, DeleteModal, EditExpensesModal, ViewExpenseDetailsModal } from "../../../../components";
// import { useAddExpense } from "../../../../hook/Admin/FinancialMaintenance";
import { useAddExpense, useListExpense, useDeleteExpense } from "@/hook/Admin/FinancialMaintenance";

export const Expense = () => {
  const { dataListExpense, fetchListExpense } = useListExpense()
  const {
    title,
    setTitle,
    description,
    setDescription,
    date,
    setDate,
    amount,
    setAmount,
    bill,
    handleFileChange,
    handleFileRemove,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
    isEdit,
    handleDelete
  } = useAddExpense(fetchListExpense);

  const {
    expenseDelete,
    deleteExpenseData,
    setDeleteExpenseData,
    showDeleteModal,
    setShowDeleteModal,
  } = useDeleteExpense(fetchListExpense);

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
        )
      }
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
            onClick={() => {
              setShowDeleteModal(true)
              setDeleteExpenseData(record)
            }}
          />
        </Space>
      ),
    },
  ];

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleViewClick = (expense) => {
    setSelectedExpense(expense);
    setViewModalOpen(true);
  };

  const handleDeleteExpense = async () => {
    if (deleteExpenseData) {
      const result = await expenseDelete(deleteExpenseData._id); // API Call to delete
      if (result.success) {
        setShowDeleteModal(false);
        setDeleteExpenseData(null);
        await refetchAnnouncements();
      } else {
        console.log("Error deleting announcement");
      }
    }
  };

  return (
    <div>
      <DSCard
        title={"Add Expenses Details"}
        headerContent={
          <DSButton
            variant={"primary"}
            icon={Icons.AddSquare}
            onClick={openCreateModal}
          >
            Add New Expenses details
          </DSButton>
        }
        button={true}
        onClick={openCreateModal}
      >
        <DSTable tableColumn={columns} dataSource={dataListExpense} pagination={false} />

      </DSCard>
      <div>

        {/* Add Expense Modal */}
        <AddExpensesDetailsModal
          open={isModalOpen}
          handleOk={handleSubmit}
          handleCancel={closeModal}
          handleClose={closeModal}
          isEdit={isEdit}
          addExpensesDetails={{
            title,
            description,
            date,
            amount,
            bill,
          }}
          setAddExpensesDetails={{
            setTitle,
            setDescription,
            setDate,
            setAmount,
            handleFileChange,
            handleFileRemove,
          }}
        />

        {/* Edit Expense Modal */}
        {/* <EditExpensesModal
          open={editExpensesModalOpen}
          handleOk={() => setEditExpensesModalOpen(false)}
          handleCancel={() => setEditExpensesModalOpen(false)}
          handleClose={() => setEditExpensesModalOpen(false)}
          expense={selectedExpense}
        /> */}

        {/* View Expense Modal */}
        <ViewExpenseDetailsModal
          open={viewModalOpen}
          handleOk={() => setViewModalOpen(false)}
          handleCancel={() => setViewModalOpen(false)}
          handleClose={() => setViewModalOpen(false)}
          expense={selectedExpense}
        />

        {/* Remove Expense Modal */}
        <DeleteModal
          title={"Delete Expense?"}
          isModalOpen={showDeleteModal}
          handleClose={() => setShowDeleteModal(false)}
          handleOk={handleDeleteExpense}
          onCancel={() => setShowDeleteModal(false)}
          children={"Are you sure you want to delate this?"}
        />

      </div>
    </div>
  );
};

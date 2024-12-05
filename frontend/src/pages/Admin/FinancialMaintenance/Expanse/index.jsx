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
  // useViewExpanse,
  useDeleteExpense,
  useListExpense,
  useAddExpense
} from "@/hook/Admin/FinancialMaintenance/";

export const Expense = () => {
  // const { tableData, isLoading, fetchData } = useViewExpanse();
  const { dataListExpense, fetchListExpense, isLoading } = useListExpense();
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
    isSubmitting,
    isModalOpen,
    openCreateModal,
    openEditModal,
    closeModal,
    handleSubmit,
    isEdit,
  } = useAddExpense(fetchListExpense);
  const {
    expenseDelete,
    loading,
    showDeleteModal,
    setShowDeleteModal,
    deleteExpenseData,
    setDeleteExpenseData,
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
            onClick={() => handleDeleteClick(record)}
          />
        </Space>
      ),
    },
  ];

  const [selectedExpense, setSelectedExpense] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleViewClick = (expense) => {
    setSelectedExpense(expense);
    setViewModalOpen(true);
  };

  const handleDeleteClick = (expense) => {
    setSelectedExpense(expense);
    setDeleteExpenseData(expense);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (selectedExpense) {
      const response = await expenseDelete(selectedExpense._id);
      if (response.success) {
        setShowDeleteModal(false);
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
      >
        <DSTable
          tableColumn={columns}
          dataSource={dataListExpense}
          loading={isLoading}
          pagination={false}
        />
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
          handleOk={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
          children={"Are you sure you want to delete this?"}
          loading={loading}
        />
      </div>
    </div>
  );
};

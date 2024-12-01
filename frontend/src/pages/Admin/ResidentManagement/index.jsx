import { useEffect, useState } from "react";
import { Avatar, Space, Tag } from "antd";
import { DSButton, DSModal, DSCheckbox, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { getUser } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import styles from "./ResidentManagement.module.css";
import { useNavigate } from "react-router-dom";
import { ViewDetailsModal } from "../../../components/DSModalComponents/ModalTemplate/ResidentManagement/ViewDetailsModal";

export const ResidentManagement = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getUser();

        if ((response.message = "Success" && response.data)) {
          const formattedData = response.data.map((item, index) => ({
            key: item._id || index,
            fullName: item.fullName || "-",
            avatar: item.profile_image || "",
            unitNumber: item.unit || "-",
            wing: item.wing || "-",
            unitColor: "blue",
            unitStatus: item.isActive ? "Occupied" : "Vacate",
            residentStatus: item.type === "owner" ? "Owner" : "Tenant",
            phoneNumber: item.phoneNo || "--",
            member: item.members || "-",
            vehicle: item.vehicles || "-",
          }));
          setTableData(formattedData);
        } else {
          toast.error("Failed to fetch data.");
        }
      } catch (error) {
        toast.error("Error fetching user data.");
        console.error("Fetch error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text, record) => (
        <Space>
          <Avatar src={record.avatar} size={40} style={{ marginRight: 8 }} />
          {text}
        </Space>
      ),
    },
    {
      title: "Unit Number",
      dataIndex: "unitNumber",
      key: "unitNumber",
      render: (_, record) => (
        <Tag color="blue">
          {record.wing} - {record.unitNumber}
        </Tag>
      ),
    },
    {
      title: "Unit Status",
      dataIndex: "unitStatus",
      key: "unitStatus",
      render: (status) => (
        <Tag color={status === "Occupied" ? "green" : "purple"}>{status}</Tag>
      ),
    },
    {
      title: "Resident Status",
      dataIndex: "residentStatus",
      key: "residentStatus",
      render: (status) => (
        <Tag color={status === "Tenant" ? "pink" : "blue"}>{status}</Tag>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Member",
      dataIndex: "member",
      key: "member",
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle",
      key: "vehicle",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) =>
        record.unitStatus !== "Vacate" ? (
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
              onClick={() => setViewDetailsModal(true)}
            />
          </Space>
        ) : (
          <Tag>--</Tag>
        ),
    },
  ];

  const [viewDetailsModal, setViewDetailsModal] = useState(false);

  return (
    <>
      <DSCard
        title="Resident Tenant and Owner Details"
        className={styles.residentManagementScreen}
        button
        headerContent={
          <>
            <DSButton
              variant={"primary"}
              icon={Icons.AddSquare}
              onClick={() => navigate("/admin/resident-detail")}
            >
              Add New Resident details
            </DSButton>
          </>
        }
      >
        <div className={styles.rmTable}>
          <DSTable
            tableColumn={columns}
            pagination={false}
            loading={isLoading}
            dataSource={tableData}
          />
        </div>
      </DSCard>

      {/* Viwe Details Modal */}
      <ViewDetailsModal
        title={"View Owner Details"}
        open={viewDetailsModal}
        handleClose={() => setViewDetailsModal(false)}
      />
    </>
  );
};

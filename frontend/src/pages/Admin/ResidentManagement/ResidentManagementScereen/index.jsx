import { useEffect, useState } from "react";
import { Avatar, Space, Tag } from "antd";
import { DSButton, DSModal, DSCheckbox, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { listMember } from "@/axiosApi/ApiHelper";
import toast from "react-hot-toast";
import style from "./ResidentManagement.module.css";

const ResidentManagementScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("Occupied");
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await listMember();
        if (response.status === 1 && response.data) {
          const formattedData = response.data.map((item, index) => ({
            key: item._id || index,
            fullName: item.fullName || "-",
            avatar: item.profile_image || "",
            unitNumber: item.unit || "-",
            unitColor: "blue",
            unitStatus: item.isActive ? "Occupied" : "Vacate",
            residentStatus: item.type === "owner" ? "Owner" : "Tenant",
            phoneNumber: item.phoneNo || "--",
            member: item.members || "-",
            vehicle: item.vehicles || "-",
          }));
          setTableData(formattedData);
          console.log(formattedData);

        } else {
          toast.error(response.message || "Failed to fetch data.");
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
      render: (text, record) => <Tag color={record.unitColor}>{text}</Tag>,
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
            />
          </Space>
        ) : (
          <Tag>--</Tag>
        ),
    },
  ];

  const handleButtonClick = (value) => {
    console.log(value);
    setActiveButton(value);
  };

  return (
    <>
      <DSCard
        title="Resident Tenant and Owner Details"
        className={style.residentManagementScreen}
        icon={Icons.AddSquare}
        onClick={() => setIsModalOpen(true)}
        button
        buttonContent="Add New Resident details"
      >
        <div className={style.rmTable}>
          <DSTable
            tableColumn={columns}
            pagination={false}
            loading={isLoading}
            dataSource={tableData}
          />
        </div>
      </DSCard>
      <DSModal
        title={"Residence Status"}
        open={isModalOpen}
        handleOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        handleClose={() => setIsModalOpen(false)}
        IsFooter
        handleContent={"Save"}
        disabledButton={false}
      >
        <div className={style.cardButton}>
          <DSButton
            className={
              activeButton === "Occupied"
                ? style.activeButton
                : style.inactiveButton
            }
            onClick={() => handleButtonClick("Occupied")}
          >
            Occupied
          </DSButton>
          <DSButton
            className={
              activeButton === "Vacate"
                ? style.activeButton
                : style.inactiveButton
            }
            onClick={() => handleButtonClick("Vacate")}
          >
            Vacate
          </DSButton>
        </div>
        <div>
          <DSCheckbox>By submitting, you agree to select Occupied</DSCheckbox>
        </div>
      </DSModal>
    </>
  );
};

export default ResidentManagementScreen;

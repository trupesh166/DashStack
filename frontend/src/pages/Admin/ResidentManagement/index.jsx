import { useState } from "react";
import { DSButton, DSCard, DSTable } from "@/components";
import Icons from "@/constants/Icons";
import { useNavigate } from "react-router-dom";
import { ViewDetailsModal } from "@/components/DSModalComponents/ModalTemplate/ResidentManagement/ViewDetailsModal";
import { ResidentManagementColumns } from "@/constants";
import useResidentData from "@/hook/Admin/ResidentManagement/ResidentDetails";
import styles from "./ResidentManagement.module.css";

const ResidentManagement = () => {
  const navigate = useNavigate();

  const { tableData, isLoading } = useResidentData();
  const [viewDetailsModal, setViewDetailsModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleViewDetails = (record) => {
    setModalData(record);
    setViewDetailsModal(true);
  };

  console.log(modalData?.familyMembers);

  return (
    <>
      <DSCard
        title="Resident Tenant and Owner Details"
        className={styles.residentManagementScreen}
        button
        headerContent={
          <DSButton
            variant={"primary"}
            icon={Icons.AddSquare}
            onClick={() => navigate("/admin/resident-detail")}
          >
            Add New Resident details
          </DSButton>
        }
      >
        <div className={styles.rmTable}>
          <DSTable
            tableColumn={ResidentManagementColumns(handleViewDetails)}
            pagination={false}
            loading={isLoading}
            dataSource={tableData}
          />
        </div>
      </DSCard>

      {/* View Details Modal */}
      {modalData && (
        <ViewDetailsModal
          title={"View Owner Details"}
          open={viewDetailsModal}
          handleClose={() => setViewDetailsModal(false)}
          ImgSrc={modalData?.avatar}
          name={modalData?.fullName}
          email={modalData?.email}
          Wing={modalData?.wing}
          Unit={modalData?.unitNumber}
          Age={modalData?.age}
          Gender={modalData?.gender}
          documentType={modalData?.documents}
          memberCount={modalData?.familyMembers}
        />
      )}
    </>
  );
};

export default ResidentManagement;

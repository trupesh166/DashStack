import { useState } from "react";
import clsx from "clsx";
import {
  CreateFacilityModal,
  DSButton,
  DSCard,
  FacilityCard,
} from "@/components";
import styles from "./FacilityManagement.module.css";

export const FacilityManagement = () => {
  const [createFacilityModal, setCreateFacilityModal] = useState(false);

  const facilities = [
    {
      title: "Parking Facilities",
      date: "01/07/2024",
      description:
        "The celebration of Navratri involves the installation of clay idols of Durga in Resident.",
    },
    {
      title: "Community Center",
      date: "01/07/2024",
      description:
        "The celebration of Navratri involves the installation of clay idols of Durga in Resident.",
    },
    {
      title: "Swimming Pool",
      date: "01/07/2024",
      description:
        "The celebration of Navratri involves the installation of clay idols of Durga in Resident.",
    },
    {
      title: "Parks and Green Spaces",
      date: "01/07/2024",
      description:
        "The celebration of Navratri involves the installation of clay idols of Durga in Resident.",
    },
  ];
  return (
    <div>
      <DSCard
        title="Facility Management"
        className={clsx(styles.GridWrapper, "d-grid")}
        headerContent={
          <DSButton
            variant={"primary"}
            onClick={() => setCreateFacilityModal(true)}
          >
            Create Facility
          </DSButton>
        }
      >
        {facilities?.map((facility, index) => (
          <FacilityCard
            key={index}
            items={[{ label: "Edit", key: "edit" }]}
            title={facility.title}
            date={facility.date}
            description={facility.description}
          />
        ))}
      </DSCard>

      {/* Create Facility Modal */}
      <CreateFacilityModal
        open={createFacilityModal}
        handleOk={() => setCreateFacilityModal(false)}
        handleCancel={() => setCreateFacilityModal(false)}
        handleClose={() => setCreateFacilityModal(false)}
      />
    </div>
  );
};

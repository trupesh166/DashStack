import clsx from "clsx";
import {
  CreateFacilityModal,
  DSButton,
  DSCard,
  FacilityCard,
} from "@/components";
import styles from "./FacilityManagement.module.css";
import { useState } from "react";

export const FacilityManagement = () => {
  const [createFacilityModal, setCreateFacilityModal] = useState(false);

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
        <FacilityCard
          title="Parking Facilities"
          date="01/07/2024"
          description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
        />
        <FacilityCard
          title="Community Center"
          date="01/07/2024"
          description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
        />
        <FacilityCard
          title="Swimming Pool"
          date="01/07/2024"
          description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
        />
        <FacilityCard
          title="Parks and Green Spaces"
          date="01/07/2024"
          description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
        />
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

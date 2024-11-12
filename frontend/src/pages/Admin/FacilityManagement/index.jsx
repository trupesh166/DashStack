import clsx from "clsx";
import { DSCard, FacilityCard } from "../../../components";
import styles from "./FacilityManagement.module.css";

export const FacilityManagement = () => {
  return (
    <DSCard
      title="Facility Management"
      className={clsx(styles.GridWrapper, "d-grid")}
      button
      buttonContent="Create Facility"
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
  );
};

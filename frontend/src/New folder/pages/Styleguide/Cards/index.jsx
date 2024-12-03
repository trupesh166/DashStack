import React from "react";
import {
  ChartCard,
  DSCard,
  EventCard,
  FacilityCard,
  MaintenanceCard,
  MemberCard,
  NoteCard,
} from "@/components";

export const Cards = () => {
  return (
    <div className="d-flex flex-wrap gap-4">
      <MaintenanceCard
        date="11/04/2024"
        datePending="11/04/2024"
        maintenance={150.0}
        penalty={150.11}
        total={300.0}
      />
      <DSCard title={"Demo Card"}>
        <MaintenanceCard
          date="11/04/2024"
          datePending="11/04/2024"
          maintenance={150.0}
          penalty={150.11}
          total={300.0}
        />
      </DSCard>
      <DSCard
        title={"Demo Card"}
        button
        variant={"primary"}
        buttonContent="button"
      >
        <MaintenanceCard
          date="11/04/2024"
          datePending="11/04/2024"
          maintenance={150.0}
          penalty={150.11}
          total={300.0}
        />
      </DSCard>
      <EventCard
        title="Ganesh chaturthi"
        amount="4512"
        phone="9856237410"
        gender="male"
        age="15"
        description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
      />
      <NoteCard
        title="Rent or Mortgage"
        description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
      />
      <MemberCard
        title="Arlene McCoy"
        email="Arlenemccoy@gmail.com"
        phone="9856237410"
        gender="male"
        age="15"
        relation="Brother"
      />
      <FacilityCard
        title="Parking Facilities"
        date="01/07/2024"
        description="The celebration of Navratri involves the installation of clay idols of Durga in Resident."
      />
      <ChartCard />
    </div>
  );
};

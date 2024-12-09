import clsx from "clsx";
import {
  ChartCard,
  ComplaintCard,
  ImportantNumbersCard,
  PendingMaintenancesCard,
  TotalUserCard,
  UpcomingActivityCard,
} from "@/components";
import Icons from "@/constants/Icons";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  return (
    <div className={clsx(styles.DashboardTop, "d-grid")}>
      <TotalUserCard
        designBoxCardColor="#f7ca8c"
        title={"Total Balance"}
        amount="2,22,520"
        icon={Icons.Document}
        cardIconBackground={"rgba(255, 106, 0, 10%)"}
        designBoxColor={"rgba(255, 106, 0, 50%)"}
        cardIconColor={"rgba(255, 106, 0)"}
      />
      <TotalUserCard
        designBoxCardColor="#39973D"
        title={"Total Income"}
        amount="55,000"
        icon={Icons.MoneyRecive}
        cardIconBackground={"rgba(57, 151, 61, 10%)"}
        designBoxColor={"rgba(57, 151, 61, 50%)"}
        cardIconColor={"rgba(57, 151, 61)"}
      />
      <TotalUserCard
        designBoxCardColor="#869FF3"
        title={"Total Expense"}
        amount="20,550"
        icon={Icons.MoneySend}
        cardIconBackground={"rgba(134, 159, 243, 10%)"}
        designBoxColor={"rgba(134, 159, 243, 50%)"}
        cardIconColor={"rgba(134, 159, 243)"}
      />
      <TotalUserCard
        designBoxCardColor="#EB37C3"
        title={"Total Unit"}
        amount="20,550"
        icon={Icons.Buildings}
        cardIconBackground={"rgba(235, 55, 195, 10%)"}
        designBoxColor={"rgba(235, 55, 195, 50%)"}
        cardIconColor={"rgba(235, 55, 195)"}
      />
      <ChartCard className={styles.ChartCard} />
      <ImportantNumbersCard />
      <PendingMaintenancesCard />
      <ComplaintCard className={styles.ComplaintCard} />
      <UpcomingActivityCard />
    </div>
  );
};

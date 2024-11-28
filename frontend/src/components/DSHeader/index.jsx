import { Divider, Layout } from "antd";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { DSButton, DSInput, DSBreadCrumb, DSDropDownImg } from "@/components/";
import Icons from "@/constants/Icons";
import UseDecodeToken from "@/hook/UseDecodeToken";
import styles from "./DSHeader.module.css";

const { Header } = Layout;

export const DSHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userData } = UseDecodeToken();

  console.log(userData);
  // const { fullName, role } = userData;
  // console.log("Full Name:", fullName);
  // console.log("Role:", role);

  const dropdownItems = [
    {
      key: "1",
      label: "Profile",
    },
  ];

  return (
    <Header
      className={clsx(
        styles.header,
        "d-flex align-items-center justify-content-between"
      )}
    >
      <div className="d-flex align-items-center justify-content-center gap-xl">
        {location.pathname == "/admin" ? (
          <DSInput placeholder={"Search"} prefix={Icons.Search} />
        ) : (
          <DSBreadCrumb separator=">" admin />
        )}
      </div>
      <div
        className={clsx(
          styles.HeaderRight,
          "d-flex align-items-center justify-content-center gap-xl"
        )}
      >
        <DSButton
          icon={Icons.NotificationBall}
          onClick={() => navigate("/notifications")}
          className={styles.NotificationBallBtn}
        />
        <DSDropDownImg
          items={dropdownItems}
          name={userData?.fullName}
          image={"https://i.pravatar.cc/300"}
          position={userData?.role}
          imageAlt={"fakeImg"}
          arrow
        />
      </div>
    </Header>
  );
};

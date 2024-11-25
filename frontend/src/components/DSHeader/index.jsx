import { Layout } from "antd";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { DSButton, DSInput, DSBreadCrumb } from "@/components/";
import Icons from "@/constants/Icons";
import styles from "./DSHeader.module.css";

const { Header } = Layout;

export const DSHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <DSButton
          icon={Icons.NotificationBall}
          onClick={() => navigate("/notifications")}
        />
      </div>
    </Header>
  );
};

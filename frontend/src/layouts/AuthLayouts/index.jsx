import { Layout } from "antd";
import clsx from "clsx";
import styles from "./Authentication.module.css";

import { Outlet } from "react-router-dom";

export const AuthLayouts = () => {
  return (
    <Layout className={clsx(styles.main, "d-grid")}>
      <div
        className={clsx(styles.AuthenticationLeft, "position-relative")}
      ></div>
      <div className={clsx(styles.AuthenticationRight, "d-flex flex-column")}>
        <Outlet />
      </div>
    </Layout>
  );
};

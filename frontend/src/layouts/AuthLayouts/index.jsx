import { Layout } from "antd";
import clsx from "clsx";
import styles from "./Authentication.module.css";

import { Outlet } from "react-router-dom";

export const AuthLayouts = ({ Title }) => {
  return (
    <Layout className={clsx(styles.main, "d-grid bg-white")}>
      <div className={clsx(styles.AuthenticationLeft, "position-relative")}>
        <h1 className="font-secondary">
          <span className={styles.logoPart}>Dash</span>
          Stack
        </h1>
      </div>
      <div className={clsx(styles.AuthenticationRight, "d-flex flex-column")}>
        <div
          className={clsx(
            styles.AuthenticationContent,
            "w-100 m-auto bg-white"
          )}
        >
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

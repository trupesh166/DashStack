import { useState } from "react";
import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { DSHeader, DSSidebar } from "@/components";
import clsx from "clsx";
import styles from "./DashboardLayout.module.css";

const { Content } = Layout;

export const DashboardLayout = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Layout className={styles.main}>
      <DSSidebar items={items} className={clsx(show ? styles.Sidebar : "")} />
      <Layout>
        <DSHeader
          collapsed={collapsed}
          collapseHandle={() => setCollapsed(!collapsed)}
          mobileShow={() => setShow(!show)}
          show={show}
        />
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { DSHeader, DSSidebar } from "@/components";
import { Aside } from "@/hook";
import clsx from "clsx";
import styles from "./DashboardLayout.module.css";

const { Content } = Layout;

export const DashboardLayout = ({ items }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(false);
  const [show, setShow] = useState(false);

  const { currentPage } = Aside();
  return (
    <>
      <Layout className={styles.main}>
        <DSSidebar
          collapsed={collapsed}
          collapsedHandle={() => setCollapsed(!collapsed)}
          mobileCollapsed={mobileCollapsed}
          mobileCollapsedHandle={() => setMobileCollapsed(true)}
          items={items}
          defaultSelectedKeys={[currentPage]}
          selectedKeys={[currentPage]}
          className={clsx(show === true ? styles.Sidebar : "")}
        />
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
    </>
  );
};

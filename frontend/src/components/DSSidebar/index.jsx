import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Layout, Menu } from "antd";
import { Aside } from "@/hook";
import styles from "./DSSidebar.module.css";

const { Sider } = Layout;

export const DSSidebar = ({ collapsed, className, items }) => {
  const { currentPage } = Aside();
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  return (
    <Sider
      trigger={null}
      width={"var(--sidebar-width)"}
      collapsible
      collapsed={collapsed}
      className={clsx(styles.sider, className)}
    >
      <div className={styles.logo}>
        <Link className="d-inline-block h2 font-secondary" to="">
          <span className={styles.logoPart}>Dash</span>
          Stack
        </Link>
      </div>
      <Menu
        mode="inline"
        className={clsx(styles.menu, "border-0")}
        defaultSelectedKeys={[currentPage]}
        selectedKeys={[currentPage]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={items}
      />
    </Sider>
  );
};

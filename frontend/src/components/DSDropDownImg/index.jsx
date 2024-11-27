import { Avatar, Dropdown } from "antd";
import clsx from "clsx";
import styles from "./DSDropDownImg.module.css";

export const DSDropDownImg = ({ items, name, image, position, imageAlt }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomLeft"
      arrow
      overlayClassName={styles.customDropdown}
      className={styles.dropDwn}
    >
      <button
        className={clsx(styles.dropDwnButton, "d-flex align-items-center")}
      >
        <div className={clsx(styles.dropdownImgContainer)}>
          <Avatar src={image} size={48} alt={imageAlt} />
        </div>
        <div className={styles.dropDwnContent}>
          <h5 className={clsx(styles.dropDwnTitle, "d-block fw-bold lh-base")}>
            {name}
          </h5>
          <p className={clsx(styles.dropDwnSubTitle, "text-start clr-silver")}>
            {position}
          </p>
        </div>
      </button>
    </Dropdown>
  );
};

import { Dropdown } from "antd";
import clsx from "clsx";
import { DSButton } from "@/components/";
import styles from "./DSDropdown.module.css";

export const DSDropdown = ({
  onClick,
  dropdownMenu,
  children,
  className,
  rootClassName,
  placement,
  trigger,
  expandIcon,
  ...rest
}) => {
  return (
    <Dropdown
      menu={{
        items: dropdownMenu,
        // expandIcon: expandIcon ? expandIcon : Icons.DropdownArrowRight,
        onClick: onClick,
        className: styles.dropdownMenu,
        rootClassName: styles.dropdownSubMenu,
      }}
      trigger={trigger}
      className={className}
      rootClassName={clsx(styles.dropdown, rootClassName)}
      {...rest}
      placement={placement}
    >
      <DSButton>{children}</DSButton>
    </Dropdown>
  );
};

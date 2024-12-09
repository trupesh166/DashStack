import { Button } from "antd";
import clsx from "clsx";
import styles from "./DSButton.module.css";

export const DSButton = ({
  size,
  type,
  icon,
  className,
  children,
  onClick,
  id,
  name,
  variant,
  shape,
  ...rest
}) => {
  return (
    <Button
      id={id}
      name={name}
      shape={shape}
      size={size}
      icon={icon}
      htmlType={type}
      type={variant}
      onClick={onClick}
      className={clsx(styles.Button, className)}
      {...rest}
    >
      {children}
    </Button>
  );
};

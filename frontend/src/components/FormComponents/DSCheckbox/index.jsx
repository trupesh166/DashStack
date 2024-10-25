import { Checkbox } from "antd";
import clsx from "clsx";
import styles from "./DSCheckbox.module.css";

export const DSCheckbox = ({
  value,
  onChange,
  disabled,
  className,
  children,
  checked,
  id,
  name,
  ...rest
}) => {
  return (
    <Checkbox
      value={value}
      onChange={onChange}
      className={clsx(styles.CheckBox, className)}
      disabled={disabled}
      id={id}
      name={name}
      {...(checked && checked)}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

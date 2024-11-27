import { Card, Dropdown } from "antd";
import { DSButton } from "../..";
import Icons from "@/constants/Icons";
import styles from "./DSEventsCard.module.css";

export const DSEventsCard = ({
  children,
  title,
  items,
  onAction,
  className,
}) => {
  return (
    <Card
      title={title}
      extra={
        <>
          <Dropdown
            menu={{
              items,
              onClick: ({ key }) => onAction?.(key),
            }}
          >
            <DSButton
              size={"small"}
              variant={"default"}
              icon={Icons.Ellipsis}
              className={styles.btn}
            />
          </Dropdown>
        </>
      }
      className={className}
    >
      {children}
    </Card>
  );
};

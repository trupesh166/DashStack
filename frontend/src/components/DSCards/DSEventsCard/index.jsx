import { Card, Dropdown } from "antd";
import { DSButton } from "../..";
import Icons from "@/constants/Icons";
import styles from "./DSEventsCard.module.css";

export const DSEventsCard = ({ children, title, items, className }) => {
  return (
    <Card
      title={title}
      extra={
        <>
          <Dropdown
            menu={{
              items,
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

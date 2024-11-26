import styles from "./DSEventsCard.module.css";

export const DSEventsCard = ({ children }) => {
  return (
    <Card
      title={title}
      extra={
        <>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["contextMenu"]}
          >
            <DSButton
              size={"small"}
              variant={"default"}
              icon={Icons.Ellipsis}
            />
          </Dropdown>
        </>
      }
      className={styles.card}
    >
      {children}
    </Card>
  );
};

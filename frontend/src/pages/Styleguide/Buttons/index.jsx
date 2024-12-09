import clsx from "clsx";
import Icons from "@/constants/Icons";
import { DSButton } from "@/components";
import styles from "../Styleguide.module.css";

export const DSButtons = () => {
  return (
    <>
      <div className={styles.cardButton}>
        <h4 className="mb-4">Primary Button</h4>
        <DSButton variant={"primary"}>Primary Button</DSButton>
      </div>
      <div className={clsx(styles.cardButton, "bg-white")}>
        <h4 className="mb-4">Default Button</h4>
        <DSButton variant={"default"}>Default Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h4 className="mb-4">Text Button</h4>
        <DSButton variant={"text"}>Text Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h4 className="mb-4">Danger Button</h4>
        <DSButton danger>Danger Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h4 className="mb-4">Only Icon Button</h4>
        <DSButton variant={"primary"} icon={Icons.NotificationBall} />
      </div>
      <div className={styles.cardButton}>
        <h4 className="mb-4">With Icons Start</h4>
        <DSButton variant={"primary"} icon={Icons.NotificationBall}>
          With Icons Start
        </DSButton>
      </div>
      <div className={styles.cardButton}>
        <h4 className="mb-4">With Icons End</h4>
        <DSButton
          variant={"primary"}
          iconPosition={"end"}
          icon={Icons.NotificationBall}
        >
          With Icons End
        </DSButton>
      </div>
      <div className={styles.cardButton}>
        <h4 className="mb-4">Disabled End</h4>
        <div className="d-flex gap-4">
          <DSButton disabled>
            Primary Button disabled
          </DSButton>
        </div>
      </div>
    </>
  );
};

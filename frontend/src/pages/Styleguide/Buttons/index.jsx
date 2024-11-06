import { DSButton } from "@/components";
import Icons from "@/constants/Icons";
import styles from "../Styleguide.module.css";

export const DSButtons = () => {
  return (
    <>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Primary Button</h2>
        <DSButton variant={"primary"}>Primary Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Button Small Size</h2>
        <DSButton variant={"primary"} size={"small"}>
          Primary Button
        </DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Only Icon Button</h2>
        <DSButton variant={"primary"} icon={Icons.Settings} />
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Only Icon Small Button</h2>
        <DSButton size={"small"} variant={"primary"} icon={Icons.Settings} />
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Default Button</h2>
        <DSButton variant={"default"}>Default Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Dashed Button</h2>
        <DSButton variant={"dashed"}>Dashed Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Text Button</h2>
        <DSButton variant={"text"}>Text Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Danger Button</h2>
        <DSButton danger>Danger Button</DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">With Icons Start</h2>
        <DSButton variant={"primary"} icon={Icons.Settings}>
          With Icons Start
        </DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">With Icons End</h2>
        <DSButton
          variant={"primary"}
          iconPosition={"end"}
          icon={Icons.Settings}
        >
          With Icons End
        </DSButton>
      </div>
      <div className={styles.cardButton}>
        <h2 className="mb-4">Disabled Icons End</h2>
        <div className="d-flex gap-4">
          <DSButton disabled variant={"primary"}>
            Primary Button disabled
          </DSButton>
        </div>
      </div>
    </>
  );
};

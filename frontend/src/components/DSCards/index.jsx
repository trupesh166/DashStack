import clsx from "clsx";
import styles from "./DSCard.module.css";
import { DSButton } from "..";

export const DSCard = ({
  children,
  title,
  button,
  buttonContent,
  headerContent,
  rootClass,
  className,
  ...rest
}) => {
  return (
    <div className={clsx(styles.card, rootClass)}>
      <div
        className={clsx(
          styles.header,
          "d-flex align-items-center justify-content-between"
        )}
      >
        <h3 className="fw-semibold lh-base">{title}</h3>
        <div>
          {button && (
            <DSButton variant={"primary"} {...rest}>
              {buttonContent}
            </DSButton>
          )}
          {headerContent}
        </div>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

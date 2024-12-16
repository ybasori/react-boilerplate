import styles from "./Button.module.scss";
import { IButton } from "./Button.type";

const Button: React.FC<IButton> = ({ color, children, onClick }) => {
  return (
    <button
      className={`${styles["container"]} ${styles["color-" + color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

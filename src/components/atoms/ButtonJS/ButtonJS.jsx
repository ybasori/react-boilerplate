import { sampleData } from "./Button.constant";
import styles from "./ButtonJS.module.scss";
import PropTypes from "prop-types";

const ButtonJS = ({ color, children, onClick }) => {
  return (
    <button
      className={`${styles["container"]} ${styles["color-" + color]}`}
      onClick={onClick}
    >
      {sampleData} {children}
    </button>
  );
};

ButtonJS.propTypes = {
  color: PropTypes.oneOf(["blue", "red"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default ButtonJS;

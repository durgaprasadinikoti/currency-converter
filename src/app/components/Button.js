import styles from "./Button.module.css";
const Button = ({ children }) => {
  return (
    <div className={styles["w-full"]}>
      <button className={styles["submit-btn"]}>{children}</button>
    </div>
  );
};

export default Button;

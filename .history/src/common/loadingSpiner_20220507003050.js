// import { Rings } from "react-loader-spinner";
// import { RevolvingDot } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";
import styles from "./loadingSpiner.module.scss";

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <RotatingLines width="30" />
    </div>
  );
};

// import { Rings } from "react-loader-spinner";
// import { RevolvingDot } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";
import styles from "./loadingSpiner.module.scss";

export const Spinner = () => {
  return <RotatingLines width="30" className={{styles.spinner}} />;
};

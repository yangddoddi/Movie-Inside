// import { Rings } from "react-loader-spinner";
// import { RevolvingDot } from "react-loader-spinner";
import { LineWave } from "react-loader-spinner";
import styled from "./loadingSpiner.module.scss";

export const Spinner = () => {
  return (
    <LineWave
      color="red"
      firstLineColor="blue"
      middleLineColor="green"
      lastLineColor="grey"
    />
  );
};

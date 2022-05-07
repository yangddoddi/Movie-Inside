// import { Rings } from "react-loader-spinner";
// import { RevolvingDot } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";
import styled from "./loadingSpiner.module.scss";

export const Spinner = () => {
  return (
    <div className={styled.spinner}>
      <RotatingLines
        color="red"
        firstLineColor="blue"
        middleLineColor="green"
        lastLineColor="grey"
      />
    </div>
  );
};

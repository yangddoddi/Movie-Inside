// import { Rings } from "react-loader-spinner";
// import { RevolvingDot } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";
import styled from "./loadingSpiner.module.scss";

export const Spinner = () => {
  return (
    <div className={styled.spinmer}>
      <RotatingLines
        type="Oval"
        color="#3d66ba"
        height={30}
        width={30}
        timeout={3000}
      />
    </div>
  );
};

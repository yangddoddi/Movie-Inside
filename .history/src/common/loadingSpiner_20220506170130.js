// import { Rings } from "react-loader-spinner";
// import { RevolvingDot } from "react-loader-spinner";
import { RotatingLines } from "react-loader-spinner";

export const Spinner = () => {
  return (
    <div>
      <RotatingLines
        type="Oval"
        color="#3d66ba"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};

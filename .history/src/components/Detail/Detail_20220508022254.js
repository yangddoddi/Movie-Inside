import React, { useEffect } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  const API_KEY = "c8bbbc721826450428abb9e5d4319003";

  return <div className={styled.detailContainer}> aa</div>;
};

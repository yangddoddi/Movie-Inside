import React, { useEffect } from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();

  return <div className={styled.detailContainer}> aa</div>;
};

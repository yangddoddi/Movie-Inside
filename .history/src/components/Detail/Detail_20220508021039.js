import React from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";

export const Detail = () => {
  console.log(useParams());
  const { id } = useParams();

  return <div className={styled.detailContainer}>임데이</div>;
};

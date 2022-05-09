import React from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { id } = useParams();
  console.log(id);

  return <div className={styled.detailContainer}>임데이</div>;
};

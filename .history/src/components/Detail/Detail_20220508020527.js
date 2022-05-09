import React from "react";
import styled from "./Detail.module.scss";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const { params } = useParams();
  console.log({ params });

  return <div className={styled.detailContainer}>{params}임데이</div>;
};

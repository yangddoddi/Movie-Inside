import React, { forwardRef } from "react";
import styles from "./ListItems.module.scss";

export const ListItems = forwardRef(({ children }, ref) => {

  return(  <div className={styles.List}>
    <div className={styles.ListContainer}>{children}</div>
    <button ref={ref} className={styles.moreBtn} onClick={onClickHandler}>
      더보기
    </button>
  </div>)}

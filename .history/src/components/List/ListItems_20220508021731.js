import React, { forwardRef } from "react";
import styles from "./ListItems.module.scss";

export const ListItems = forwardRef(({ children, setPage, page }, ref) => {
  const onClickHandler = () => {
    setPage((prev) => prev + 1);
    console.log(page);
  };

  return (
    <div className={styles.List} onClick={goDetailPage}>
      <div className={styles.ListContainer}>{children}</div>
      <button ref={ref} className={styles.moreBtn} onClick={onClickHandler}>
        더보기
      </button>
    </div>
  );
});

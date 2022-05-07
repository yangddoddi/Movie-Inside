import React, { forwardRef } from "react";
import styles from "./ListItems.module.scss";

export const ListItems = forwardRef(({ children }, ref) => (
  <div className={styles.List}>
    <div className={styles.ListContainer} ref={ref}>
      {children}
    </div>
    <div ref={ref} className={styled.end} />
  </div>
));

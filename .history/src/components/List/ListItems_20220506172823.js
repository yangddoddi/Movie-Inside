import React, { forwardRef } from "react";
import styles from "./ListItems.module.scss";

export const ListItems = forwardRef(({ children }, ref) => (
  <div className={styles.List} ref={ref}>
    <div className={styles.ListContainer}>{children}</div>
  </div>
));
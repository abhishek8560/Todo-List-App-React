import { useState } from "react";
import React from "react";
import styles from "./Credit.module.css";

function Credit() {
  let [time, setTime] = useState();
  function handelTime() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }
  setTimeout(handelTime, 1000);

  let year = new Date().getFullYear();
  return (
    <p className={styles.credit}>
      Abhishek Yadav || {time} || {year}
    </p>
  );
}

export default Credit;

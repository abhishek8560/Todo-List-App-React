import React, { useState } from "react";
import styles from "./List.module.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import WelcomeMessage from "./WelcomeMessage";

function List({ listArray, onDeleteClick }) {
  return (
    <div className={styles.listContainer}>
      {listArray.length > 0 ? (
        listArray.map((item, index) => (
          <div className={styles.listItemContainer} key={index}>
            <p className={styles.listItem}>
              <FaArrowAltCircleRight />
              {item}
            </p>
            <button
              onClick={() => onDeleteClick(index)}
              className={styles.deleteButton}
            >
              Done
            </button>
          </div>
        ))
      ) : (
        <WelcomeMessage />
      )}
    </div>
  );
}

export default List;

import React from "react";
import styles from "./InputField.module.css";

function InputField({ onAddClick, onInputChange, value }) {
  return (
    <div className={styles.inputContainer}>
      <input
        onChange={onInputChange}
        value={value}
        type="text"
        placeholder="Enter task To-do here ........."
      />
      <button className={styles.addButton} onClick={onAddClick}>Add</button>
    </div>
  );
}

export default InputField;

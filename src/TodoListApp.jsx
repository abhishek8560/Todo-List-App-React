import React, { useState } from "react";
import Header from "./Components/Header";
import InputField from "./Components/InputField";
import Credit from "./Components/Credit";
import List from "./Components/List";
import styles from "./TodoListApp.module.css";

function TodoListApp() {
  let [inputText, setInputChange] = useState("");
  let [listArray, setListArray] = useState([]);
  function onInputChange(event) {
    setInputChange(event.target.value);
  }
  function onAddClick() {
    if (inputText === "") {
      return;
    }
    setListArray([...listArray, inputText]);
    setInputChange("");
  }

  function onDeleteClick(index) {
    let newListArray = [...listArray];
    newListArray.splice(index, 1);
    setListArray(newListArray);
  }

  return (
    <div className={styles.appContainer}>
      <Header />
      <InputField
        onInputChange={onInputChange}
        onAddClick={onAddClick}
        value={inputText}
      />
      <List
        listArray={listArray}
        onDeleteClick={onDeleteClick}
      />
      <Credit />
    </div>
  );
}

export default TodoListApp;

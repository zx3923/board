import React, { useState } from "react";
import styles from "./Write.module.css";

const Write = ({ onInsert }) => {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      alert(" 내용이 비었습니다. ");
      return;
    }
    setTitles((currentArray) => [title, ...currentArray]);

    setTitle("");
  };

  return (
    <>
      <div className={styles.textBox}>
        <form onSubmit={onSubmit} className={styles.write}>
          <input type="text" onChange={onChange} value={title} />
          <button onSubmit={onSubmit}>작성완료</button>
        </form>
      </div>
      <ul>
        {titles.map((title) => (
          <li>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default Write;

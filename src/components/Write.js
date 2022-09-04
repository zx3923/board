import React, { useState } from "react";
import styles from "./Write.module.css";

const Write = ({ onChange, onSubmit, title, titles, value }) => {
  return (
    <>
      <div className={styles.textBox}>
        <form onSubmit={onSubmit} className={styles.write}>
          <input type="text" onChange={onChange} value={value} placeholder="내용" />
          <button onSubmit={onSubmit}>작성완료</button>
        </form>
      </div>
    </>
  );
};

export default Write;

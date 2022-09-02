import React, { useState } from "react";
import styles from "./Write.module.css";

const Write = ({ onChange, onSubmit, title, titles }) => {
  return (
    <>
      <div className={styles.textBox}>
        <form onSubmit={onSubmit} className={styles.write}>
          <input type="text" onChange={onChange} value={title} />
          <button onSubmit={onSubmit}>작성완료</button>
        </form>
      </div>
    </>
  );
};

export default Write;

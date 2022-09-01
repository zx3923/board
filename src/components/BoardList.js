import React, { Component } from "react";
import styels from "./BoardList.module.css";
import { Link } from "react-router-dom";

const BoardList = ({ children }) => {
  return (
    <>
      <div className={styels.table}>
        <Link to="/write">
          <button>글 쓰기</button>
        </Link>
      </div>
    </>
  );
};

export default BoardList;

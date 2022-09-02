import React from "react";
import { Link } from "react-router-dom";
import List from "./List";

const Main = ({ titles }) => {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>게시판</h2>
      <List titles={titles} />
      <Link to={"/write"}>
        <button>글 작성하기</button>
      </Link>
    </>
  );
};

export default Main;

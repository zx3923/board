import React from "react";
import Listrescue from "./Listrescue";
import styles from "./List.module.css";

const List = ({ titles }) => {

  const titleslist = titles.map((e) => <Listrescue
    id={e.id}
    board_title={e.board_title}
    board_content={e.board_content}
    REGISTER_DATE={e.REGISTER_DATE}
    key={e.id}
  />);
  return (
    <>
      <h3 className={styles.h3}>
        <span>글번호</span>
        <span>제목</span>
        <span>등록일</span>
      </h3>
      <div className={styles.titleslist}>{titleslist}</div>

    </>
  );
};

export default List;

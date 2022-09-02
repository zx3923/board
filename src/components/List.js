import React from "react";
import Listrescue from "./Listrescue";
import styles from "./List.module.css";

const List = ({ titles }) => {
  const book = [
    { id: 1, title: "제목1" },
    { id: 2, title: "제목2" },
    { id: 3, title: "제목3" },
  ];
  const booklist = book.map((e) => <Listrescue title={e.title} id={e.id} />);
  return (
    <>
      <h3 className={styles.h3}>
        <span>글번호</span>
        <span>제목</span>
        <span>등록일</span>
      </h3>
      <div className={styles.booklist}>{booklist}</div>
      <ul>
        {titles.map((title) => (
          <li>{title}</li>
        ))}
      </ul>
    </>
  );
};

export default List;

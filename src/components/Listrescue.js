import React from "react";
import styles from "./Listrescure.module.css";
import { Link } from "react-router-dom";

const Listrescue = (props) => {
  return (
    <div>
      <div className={styles.text}>
        <span>{props.id}</span>
        <Link to={"/view/"}>
          <span> {props.title}</span>
        </Link>
        <span>(등록일)</span>
      </div>
    </div>
  );
};

export default Listrescue;

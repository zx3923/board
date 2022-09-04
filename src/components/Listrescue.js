import React from "react";
import styles from "./Listrescure.module.css";
import { Link } from "react-router-dom";

const Listrescue = (props) => {
  return (
    <div>
      <div className={styles.text}>
        <span>{props.id}</span>
        <Link to={`/view/${props.id}`}>
          <span> {props.board_title}</span>
        </Link>
        <span>{props.REGISTER_DATE}</span>
      </div>
    </div>
  );
};

export default Listrescue;

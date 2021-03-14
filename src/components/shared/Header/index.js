import React, { useContext } from "react";
import styles from "./index.module.css";
import Logo from "../../../assets/img/logo.png";
import Logout1 from "../../../assets/img/logout1.png";
import Logout2 from "../../../assets/img/logout2.png";
import { DateContext } from "../../../App";

export default function Header({ title }) {
  const date = useContext(DateContext);
  return (
    <div
      style={{
        padding: 20,
        position: "absolute",
        width: "calc(100% - 40px)",
      }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.logo} src={Logo} />
        <span className={styles.userGreetings}>Bonjour John</span>
        <div className={styles.date}>
          {date.day}/{date.month}/{date.year}
        </div>
        <div style={{ position: "relative", margin: "0px 20px 0px 10px" }}>
          <img className={styles.logout} src={Logout1} />
          <img
            style={{
              position: "absolute",
              top: 3,
              left: 10,
            }}
            className={styles.logout}
            src={Logout2}
          />
        </div>
      </div>
    </div>
  );
}

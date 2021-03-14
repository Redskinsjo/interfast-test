import React from "react";
import styles from "./index.module.css";
import Arrow from "../../assets/img/arrow.png";
import Historic from "../../assets/img/historic.png";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <Link to="/myinterventions" className={styles.navButton}>
          <img className={styles.navIcon} src={Arrow} />
          <span className={styles.navButtonTitle}>MES INTERVENTIONS</span>
          <div className={styles.notification}>3</div>
        </Link>
        <div className={styles.navButton}>
          <img className={styles.navIcon} src={Historic} />
          <span className={styles.navButtonTitle}>HISTORIQUE</span>
        </div>
      </div>
    </div>
  );
}

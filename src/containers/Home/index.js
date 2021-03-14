import React from "react";
import styles from "./index.module.css";
import Header from "../../components/shared/Header/index";
import Stars from "../../components/shared/Stars/index";
import Navigation from "../../components/Navigation/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header title="Accueil" />
      <Stars />
      <Navigation />

      <div className={styles.add}>
        <FontAwesomeIcon icon="plus" className={styles.addIcon} />
      </div>
    </div>
  );
}

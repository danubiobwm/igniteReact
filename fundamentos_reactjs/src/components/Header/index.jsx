import React from "react";
import  logo  from '../../assets/simbol.svg'
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo"/>
      <strong>Ignite Feed</strong>
    </header>
  );
}

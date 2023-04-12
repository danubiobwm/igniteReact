import React from "react";
import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function SideBar() {
  return (
      <div>
        <aside className={styles.sidebar}>
          <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1677029907981-e9a44fb7409a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50" alt="img" />

          <div className={styles.profile}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/40647550?v=4" alt="foto" />
            <strong>Danubio</strong>
            <span>Fullstack</span>
          </div>
          <footer>
            <a href="#">
              <PencilLine size={'20px'}/>
              Editar seu perfil
              </a>
          </footer>
        </aside>
      </div>
  );
}

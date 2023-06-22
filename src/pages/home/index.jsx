import { Link } from "react-router-dom";
import styles from "./style.module.css";
import SetaD from "../../assets/caret-right-thin.svg";

import { useEffect } from "react";

export const Home = () => {
  // useEffect(() => {
  //   document.body.style.backgroundImage = "none";

  //   return () => {
  //     // Restaurar a imagem de fundo original ao desmontar o componente
  //     document.body.style.backgroundImage = "";
  //   };
  // }, []);
  return (
    <div className={styles["container"]}>
      <h1>coleção de inverno 2023</h1>
      <Link className={styles["container-link"]} to="/produtos">
        {" "}
        Compre com a gente
        <img
          src={SetaD}
          alt="seta para direita indicando para parte dos produtos"
        />
      </Link>
    </div>
  );
};

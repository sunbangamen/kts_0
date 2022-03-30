import React from "react";
import styles from "../Shop.module.css";

function Home() {
  return (
    <div className={styles.centered}>
      <h1>재난방지</h1>
      <p>{new Date().toString()}</p>
    </div>
  );
}

export default Home;

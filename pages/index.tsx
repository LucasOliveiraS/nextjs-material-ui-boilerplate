import React from "react";

import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={[styles.container, styles.effect6].join(" ")}>
      <h1 className={styles.description}>Hello, World!</h1>
    </div>
  );
};

export default Home;

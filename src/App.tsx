import React from "react";
import DemoPage from "./demo";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <DemoPage />
    </div>
  );
};

export default App;

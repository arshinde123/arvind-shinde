import React from "react";

import Sidebar from "./components/sidebar";

import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <div className="container__sidebar">
        <Sidebar />
      </div>
      <div className="container__content"></div>
    </div>
  );
};

export default App;

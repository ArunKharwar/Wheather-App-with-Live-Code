import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
         This web is design and coded  by{" "}
          Arun Kharwar                </div>
          <div className="footer-info">
         Thanks for visiting{" "}
                 </div>
    </React.Fragment>
  );
}

export default App;

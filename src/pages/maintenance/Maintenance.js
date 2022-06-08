import React from "react";
import "./Maintenance.css";
import logo from "./under.png";

function Maintenance() {
  return (
    <div className="maintenance">
      <div className="logo">
        <h1>KV</h1>
      </div>
      <div>
        <img src={logo} alt="" />
        <h1>Under Maintenance!</h1>
        <p>To make things right we need some time to rebuild</p>
      </div>
    </div>
  );
}

export default Maintenance;

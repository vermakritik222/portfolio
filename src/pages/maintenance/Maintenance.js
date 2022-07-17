import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./Maintenance.css";
import logo from "./under.png";

function Maintenance() {
  const history = useHistory();
  return (
    <div className="maintenance">
      <div className="logo">
        <h1>KV</h1>
      </div>
      <div className="content">
        <img src={logo} alt="" />
        <h1>Under Maintenance!</h1>
        <p>To make things right we need some time to rebuild</p>
      </div>
      <div className="maintenance__btn">
        <Button onClick={() => history.push("/snippets")} variant="contained">
          don't click
        </Button>
      </div>
    </div>
  );
}

export default Maintenance;

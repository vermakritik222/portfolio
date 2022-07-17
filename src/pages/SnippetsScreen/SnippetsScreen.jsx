import React from "react";
import { Grid, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useHistory } from "react-router-dom";
import SnippetsScreenCard from "../../components/SnippetsScreenCard/SnippetsScreenCard";
import SnippetsScreenData from "../../data/SnippetsScreen.json";
import "./SnippetsScreen.scss";

function SnippetsScreen() {
  const history = useHistory();
  return (
    <div className="snippetsScreen">
      <div className="snippetsScreen__headerCover">
        <div className="snippetsScreen__header">
          <h1>
            <span style={{ marginRight: "10px" }}>
              <IconButton
                onClick={() => {
                  history.goBack();
                }}
                sx={{ height: "54px", width: "54px", color: "white" }}
              >
                <ArrowBackIcon sx={{ fontSize: "3rem", color: "white" }} />
              </IconButton>
            </span>
            Welcome to snippet's World
          </h1>
        </div>
      </div>
      <div className="snippetsScreen__container">
        <Grid container spacing={2.5}>
          {SnippetsScreenData.map((el) => (
            <Grid item key={el._id} xs={12} sm={6} md={4}>
              <SnippetsScreenCard
                name={el.name}
                img={el.img}
                link={el._id}
                founder={el?.founder}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default SnippetsScreen;

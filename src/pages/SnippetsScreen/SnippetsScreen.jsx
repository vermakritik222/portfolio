import { Grid } from "@mui/material";
import React from "react";
import SnippetsScreenCard from "../../components/SnippetsScreenCard/SnippetsScreenCard";
import SnippetsScreenData from "../../data/SnippetsScreen.json";
import "./SnippetsScreen.scss";

function SnippetsScreen() {
  return (
    <div className="snippetsScreen">
      <div className="snippetsScreen__headerCover">
        <div className="snippetsScreen__header">
          <h1>Welcome to snippet's World</h1>
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

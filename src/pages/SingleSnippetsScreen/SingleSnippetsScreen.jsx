import React from "react";
import { Grid, Divider } from "@mui/material";
import SingleSnippetsCard from "../../components/SingleSnippetsCard/SingleSnippetsCard";
import SingleSnippetsCode from "../../components/SingleSnippetsCode/SingleSnippetsCode";
import SingleSnippetsCodeCard from "../../components/SingleSnippetsCodeCard/SingleSnippetsCodeCard";
import DisplayData from "../../data/index";
import metaData from "../../data/SnippetsScreen.json";
import "./SingleSnippetsScreen.scss";

function SingleSnippetsScreen() {
  const query = window.location.search.split("=")[1] * 1;
  const [current] = metaData.filter((el) => el._id === query);
  const data = DisplayData[current.file];

  return (
    <div className="singleSnippetsScreen">
      <div className="singleSnippetsScreen__headerCover">
        <div className="singleSnippetsScreen__header">
          <h1>{current.name} snippet's</h1>
        </div>
      </div>
      <div className="singleSnippetsScreen__container">
        <Grid container spacing={3}>
          <Grid item container xs={3}>
            <Grid item xs={12}>
              <SingleSnippetsCard img={current.img} title={current.name} />
            </Grid>
          </Grid>

          <Grid item container xs={9} spacing={2}>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12}>
                <SingleSnippetsCode
                  code={data.header.text}
                  lang={current.lang}
                  title={data.header.name}
                />
              </Grid>
              {/* 
              <Grid item container xs={12} spacing={2}>
                <Grid item xs={6}>
                  <SingleSnippetsCode />
                </Grid>

                <Grid item container xs={6} spacing={2}>
                  <Grid item xs={12}>
                    <SingleSnippetsCode />
                  </Grid>
                  <Grid item xs={12}>
                    <SingleSnippetsCode />
                  </Grid>
                </Grid>
                
              </Grid> */}
            </Grid>
            <Divider />
            <Grid item container xs={12} spacing={2}>
              {data.data.map((el) => (
                <Grid key={el._id} item container xs={4}>
                  <SingleSnippetsCodeCard data={el} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SingleSnippetsScreen;

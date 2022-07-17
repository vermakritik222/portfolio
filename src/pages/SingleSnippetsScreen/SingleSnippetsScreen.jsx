import React, { useEffect } from "react";
import { Grid, Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import SingleSnippetsCard from "../../components/SingleSnippetsCard/SingleSnippetsCard";
import SingleSnippetsCode from "../../components/SingleSnippetsCode/SingleSnippetsCode";
import SingleSnippetsCodeCard from "../../components/SingleSnippetsCodeCard/SingleSnippetsCodeCard";
import { snippetsActions } from "../../store/SnippetsSlice";
import DisplayData from "../../data/index";
import metaData from "../../data/SnippetsScreen.json";
import "./SingleSnippetsScreen.scss";

function SingleSnippetsScreen() {
  const dispatch = useDispatch();
  const query = window.location.search.split("=")[1] * 1;
  const [current] = metaData.filter((el) => el._id === query);
  const data = DisplayData[current.file];

  useEffect(() => {
    dispatch(
      snippetsActions.setCode({
        text: data.data[0].text,
        lang: current.lang,
        title: data.data[0].name,
      })
    );
    dispatch(snippetsActions.setActiveCard(`${query}-${data.data[0]._id}`));
  }, [current.lang, data]);

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
              {/*  */}
            </Grid>
            <Divider />
            <Grid item container xs={12} spacing={2}>
              {data.data.map((el, idx) => (
                <Grid key={el._id} item container xs={4}>
                  <SingleSnippetsCodeCard
                    cardId={`${query}-${el._id}`}
                    active={idx === 1 ? true : false}
                    name={el.name}
                    text={el.text}
                    lang={current.lang}
                  />
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

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function SnippetsScreenCard(props) {
  const { name, img, founder, link } = props;
  //   const [mouseUp, setMouseUp] = useState(false);
  const history = useHistory();
  return (
    <Card
      onClick={() => history.push(`/id?link=${link}`)}
      //   onMouseOver={() => setMouseUp(true)}
      //   onMouseOut={() => setMouseUp(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#19264c",
      }}
    >
      <CardActionArea>
        <Grid container alignItems={"center"}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={img}
            alt="Live from space album cover"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  color: "white",
                  // color: "#85f1fe"
                }}
              >
                {name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  //   color: "white",
                  color: "#85f1fe",
                }}
              >
                {founder}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default SnippetsScreenCard;

import React from "react";
import { Grid } from "@mui/material";
import StepCount from "../component/StepCount";
import "../component/First.css";

const First = () => {
  return (
    <div className="container">
      <Grid container spacing={0}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div className="logo">
            <img src="logo.png" alt="this is logo" />
            Eden
          </div>
          <div>
            <StepCount />
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default First;

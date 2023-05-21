import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <Typography variant="subtitle1" color="text.secondary">
      UTM teza de licenta 2023{" "}
      <Link to="/" color="inherit">
        
      </Link>
    </Typography>
  );
};

export default Copyright;

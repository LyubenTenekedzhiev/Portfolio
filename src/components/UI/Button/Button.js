import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./Button.css";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    textTransform: "none",
    fontFamily: "Nunito",
    fontSize: "1.3rem",
    marginTop: "1rem",
  },
}));

export default function CustomButton() {
  const classes = useStyles();

  return (
    <div>
      <Button variant='outlined' size='medium' color='primary' className={classes.root}>
        Contact me
      </Button>
    </div>
  );
}

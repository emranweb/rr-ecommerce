import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./button.style.scss";
import ButtonUI from "@material-ui/core/Button";

const useStyle = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Button(props) {
  const classes = useStyle();

  return (
    <ButtonUI
      variant="contained"
      className={classes.margin}
      size="large"
      color="primary"
      type={props.type}
      onClick={props.event}
    >
      {props.children}
    </ButtonUI>
  );
}

export default Button;

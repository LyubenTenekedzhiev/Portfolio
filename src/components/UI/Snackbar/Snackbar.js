import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./Snackbar.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function CustomizedSnackbar({ opened, closed, contentCopied, contentValue }) {
  return (
    <div>
      {opened ? (
        <Snackbar open={opened} autoHideDuration={3500} onClose={closed} style={{ fontSize: "inherit" }}>
          <Alert severity='info' onClose={closed}>
            Sorry, I am not that social. Just needed a placeholder icon.
          </Alert>
        </Snackbar>
      ) : contentCopied ? (
        <Snackbar open={contentCopied} autoHideDuration={3500} onClose={closed} style={{ fontSize: "inherit" }}>
          <Alert severity='success' onClose={closed}>
            {contentValue} copied!
          </Alert>
        </Snackbar>
      ) : null}
    </div>
  );
}

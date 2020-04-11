import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export default function CustomizedSnackbar({ opened, closed }) {
  return (
    <div>
      <Snackbar open={opened} autoHideDuration={3500} onClose={closed}>
        <Alert severity='info' onClose={closed}>
          Sorry, I am not that social. Just needed a placeholder icon.
        </Alert>
      </Snackbar>
    </div>
  );
}

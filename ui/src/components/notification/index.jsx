import React, { useContext } from "react";

import { Button, Snackbar, Typography } from "@mui/material"
import Alert from "@mui/lab/Alert";
import { SocketContext } from "../../socket-context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const showNotification = call.isReceivingCall && !callAccepted;
  return (
    <>
      {showNotification && (
        <Snackbar
          open={showNotification}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="info">
            <Typography variant="h5" align="center">
              {call.name} is calling
            </Typography>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer
            </Button>
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Notifications;
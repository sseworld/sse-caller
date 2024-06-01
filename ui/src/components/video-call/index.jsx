import React from "react";
import { makeStyles } from "@mui/styles"
import Alert from "@mui/lab/Alert";

import VideoPlayer from "./video-player";
import Sidebar from "../sidebar/index";
import Notifications from "../notification/index";

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Alert severity="warning">
        Video calling might not work if multiple people are trying to connect as
        the server is hosted on free service. You can try couple of times to
        check or better clone the repo.
      </Alert>
      <VideoPlayer />
      <Sidebar />
      <Notifications />
    </div>
  );
};

export default App;
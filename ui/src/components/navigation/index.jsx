import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, CssBaseline, useScrollTrigger } from "@mui/material"
import { makeStyles } from "@mui/styles"
import DuoIcon from "@mui/icons-material/Duo";
import GitHubIcon from "@mui/icons-material/GitHub";

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: "54px"
  },
  link: {
    color: "black",
    marginLeft: "20px"
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default function ElevateAppBar(props) {
  const styles = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="transparent">
          <Toolbar>
            <DuoIcon color="primary" className={styles.logo} />

            <Typography variant="h5">Connect</Typography>

            <a
              href="https://github.com/knowankit/video-calling-app"
              className={styles.link}
            >
              <GitHubIcon />
            </a>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
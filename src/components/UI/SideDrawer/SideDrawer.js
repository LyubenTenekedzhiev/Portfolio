import React from "react";
import { NavLink } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WorkIcon from "@material-ui/icons/Work";
import InfoIcon from "@material-ui/icons/Info";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import "../../Navigation/Navigation.module.css";

const useStyles = makeStyles({
  list: {
    width: 220,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Portfolio", "About", "Contact"].map((text, index) => (
          <div key={index}>
            {text === "About" || text === "Contact" ? (
              <NavLink to={`${text.toLowerCase()}`} style={{ textDecoration: "none", color: "black" }}>
                <ListItem button>
                  {text === "Contact" ? (
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                  ) : (
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
            ) : (
              <NavLink to='/' style={{ textDecoration: "none", color: "black" }}>
                <div>
                  <ListItem button key={"Portfolio"}>
                    <ListItemIcon>
                      <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton color='default' aria-label='open drawer' edge='end' onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor={"right"} open={state["right"]} onClose={toggleDrawer("right", false)}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

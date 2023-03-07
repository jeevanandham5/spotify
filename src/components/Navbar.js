import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo.png";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

const Greenbutton = styled(Button)({
  background: "#1ed760",
  color: "#fff",
  padding: "5px 10px",
  margin: "10px",
  transition: "0.50s",
  fontWeight: "500",
  "&:hover": {
    background: "#128c3d",
  },
});

export default function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box flexGrow={1}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Box className="logo-name">
            <NavLink to={"/"}>
              {" "}
              <img src={logo} alt="logo" id="logo" />
            </NavLink>
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontSize: "40px" }}
              id="text"
            >
              Spotify
            </Typography>
          </Box>

          <Box className="btn">
            <Button>
              <Dropdown />
            </Button>
            <Button variant="text" color="secondary" sx={{ fontSize: "20px" }}>
              Login
            </Button>
            <Greenbutton sx={{ fontSize: "20px" }} variant="contained">
              Signup
            </Greenbutton>
          </Box>
          <IconButton id="menu-btn" onClick={toggleDrawer("left", true)}>
            <MenuIcon color="secondary" sx={{ fontSize: "60px" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      ></Sidebar>
    </Box>
  );
}

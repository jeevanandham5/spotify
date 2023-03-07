import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

export default function Sidebar({ state, setState, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box className="nav-links">
        <List>
          <ListItem disablePadding>
            <Link to={""} id="link">
              <ListItemButton>
                <ListItemIcon>
                  <PlaylistPlayIcon
                    color="secondary"
                    sx={{ fontSize: "40px" }}
                  />
                </ListItemIcon>
                <ListItemText primary="Playlist" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to={""} id="link">
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteIcon color="secondary" sx={{ fontSize: "30px" }} />
                </ListItemIcon>
                <ListItemText primary="Liked" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to={""} id="link">
              <ListItemButton>
                <ListItemIcon>
                  <AddBoxIcon color="secondary" sx={{ fontSize: "30px" }} />
                </ListItemIcon>
                <ListItemText primary="Createplaylist" />
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to={""} id="link">
              <ListItemButton>
                <ListItemIcon>
                  <LibraryMusicIcon
                    color="secondary"
                    sx={{ fontSize: "30px" }}
                  />
                </ListItemIcon>
                <ListItemText primary="Libaray" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

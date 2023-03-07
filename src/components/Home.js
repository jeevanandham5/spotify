import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Songspage from "./Songspage";

const Home = () => {
  return (
    <div className="top-home">
      <div className="home">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={2} className="nav-links">
              <Box className="list">
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
                          <FavoriteIcon
                            color="secondary"
                            sx={{ fontSize: "30px" }}
                          />
                        </ListItemIcon>
                        <ListItemText primary="Liked" />
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem disablePadding>
                    <Link to={""} id="link">
                      <ListItemButton>
                        <ListItemIcon>
                          <AddBoxIcon
                            color="secondary"
                            sx={{ fontSize: "30px" }}
                          />
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
            </Grid>
          </Grid>
        </Box>
      </div>
      <Grid item xs={12}>
        <Songspage />
      </Grid>
    </div>
  );
};

export default Home;

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import "./songs.css";

const Songspage = () => {
  return (
    <div className="songs-grid">
      <Box className="songs">
        <Typography
          sx={{
            fontSize: "40px",
            color: "#fff",
            fontWeight: "800",
            margin: "0px 50px",
          }}
        >
          Top English Hits
        </Typography>
        <Grid
          container
          rowSpacing={{ xs: 2, md: 3 }}
          columnSpacing={{ xs: 4, sm: 8, md: 10 }}
        >
          <Grid item xs={3}>
            <Box className="song-card card1" />
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card card2">
              <Typography sx={{ color: "#fff" }}>hello</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card">
              <Typography sx={{ color: "#fff" }}>hello</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card">
              <Typography sx={{ color: "#fff" }}>hello</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card card1" />

            <Typography sx={{ fontSize: "30px", color: "#121212" }}>
              Bones
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card card2">
              <Typography sx={{ color: "#fff" }}>hello</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card">
              <Typography sx={{ color: "#fff" }}>hello</Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="song-card">
              <Typography sx={{ color: "#fff" }}>hello</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Songspage;

import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

export const Mytheme = createTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: green,
  },
  Typography: {
    fontfamily: "Varela Round",
  },
});

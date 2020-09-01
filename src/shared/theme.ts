import { createMuiTheme } from "@material-ui/core/styles";

export const breakpoints = {
  values: {
    xs: 900,
    sm: 900,
    md: 900,
    lg: 1180,
    xl: 1180,
  },
};

export const theme = createMuiTheme({
  breakpoints,
  typography: {
    fontFamily: ['"Fresh Sans Md"', "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
});

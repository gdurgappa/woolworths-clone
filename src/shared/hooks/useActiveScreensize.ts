import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
export const useActiveScreensize = (): string => {
  const breakpoints: { [key: string]: boolean } = useExactBreakpoints();
  for (const breakpoint in breakpoints) {
    if (breakpoints[breakpoint]) {
      return breakpoint;
    }
  }
  return "";
};

const useExactBreakpoints = () => {
  const theme = useTheme();
  return {
    sm: useMediaQuery(theme.breakpoints.down("sm")),
    md: useMediaQuery(theme.breakpoints.between("md", "lg")),
    lg: useMediaQuery(theme.breakpoints.up("lg")),
    // lg: useMediaQuery(theme.breakpoints.down("lg")),
    // xl: useMediaQuery(theme.breakpoints.down("xl")),
  };
};

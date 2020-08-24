import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import "react-placeholder/lib/reactPlaceholder.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import store from "./store/store";
import "./style.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Fresh Sans Md"', "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
  },
});

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
        {/* <h1>Hello {name}</h1>
        <Button variant="contained">xthis is a material UI button</Button> */}
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default hot(App);

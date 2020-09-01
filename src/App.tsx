import { ThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import "react-placeholder/lib/reactPlaceholder.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Layout from "./shared/Layout/Layout";
import { theme } from "./shared/theme";
import store from "./store/store";
import "./style.css";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store}>
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

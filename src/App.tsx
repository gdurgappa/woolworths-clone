import * as React from "react";
import { hot } from "react-hot-loader/root";
import Button from "@material-ui/core/Button";
import { allCategories } from "./constants/allCategories";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import firebase from "firebase";

import "./style.css";
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { get } from "./api/request";
import { firebaseConfig } from "./config/firebaseConfig";

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

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
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

import * as React from "react";
import { hot } from "react-hot-loader/root";
import Button from "@material-ui/core/Button";
import { allCategories } from "./constants/allCategories";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import cheerio from "cheerio";
// import jsonframe from "jsonframe-cheerio";
import "./style.css";
import {
  createMuiTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { get } from "./api/request";

const theme = createMuiTheme({});

interface Props {
  name: string;
}
var frame = {
  companies: {
    _s: ".offer-tile-item",
    _d: [
      {
        // "data": [{}] defines a list of items
        name: ".offer-tile-header-title",
        url: {
          // defining "url" by an attribute with "attr" and "selector" in an object
          _s: ".offer-tile-header-roundel img", // is actually the same as the inline selector
          attr: "src", // the attribute name to retrieve
        },
      },
    ],
  },
};
class App extends React.Component<Props> {
  componentDidMount() {
    // get(
    //   "https://www.woolworths.com.au/Shop/DynamicContent2Panel?scheduleKey=/"
    // ).then((html: any) => {
    //   var $ = cheerio.load(html);
    // jsonframe($);
    // var companiesList = $("body").scrape(frame);
    //
    // });
  }
  render() {
    const { name } = this.props;
    return <></>;
  }
}

export default hot(App);

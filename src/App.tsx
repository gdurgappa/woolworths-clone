import * as React from "react";
import { hot } from "react-hot-loader/root";
import Button from "@material-ui/core/Button";
import { allCategories } from "./constants/allCategories";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        {/* <h1>Hello {name}</h1>
        <Button variant="contained">xthis is a material UI button</Button> */}
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </>
    );
  }
}

export default hot(App);

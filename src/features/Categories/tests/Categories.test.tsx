import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "@testing-library/react";

import { Router, MemoryRouter, Link } from "react-router-dom";
import Categories from "../Categories";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("<Category />", () => {
  it("link prop validation", () => {
    const { debug } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Categories />
        </Provider>
      </MemoryRouter>
    );
    debug();
    // fireEvent.click(RenderResult.getByText("Home"));
    // expect(history.location.pathname).toBe("/example");
  });
});

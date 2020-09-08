import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../../store/store";
import Categories from "../Categories";

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

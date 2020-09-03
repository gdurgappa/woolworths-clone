import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "@testing-library/react";
import LoginButton from "../LoginButton";
import { Router, MemoryRouter } from "react-router-dom";

describe("<LoginButton /> ", () => {
  it("should correctly render LoginButton", async () => {
    const { debug } = render(
      <MemoryRouter>
        <LoginButton />
      </MemoryRouter>
    );
    debug();
    // getByTestId("searchInput");
  });
});

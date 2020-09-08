import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import LoginButton from "../LoginButton";

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

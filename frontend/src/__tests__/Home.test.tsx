import { BRAND_NAME } from "@/constants/Constants";
import Home from "@/views/Home/Home";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, test } from "vitest";
import { renderWithRouter } from "./utils/testUtils";

describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    renderWithRouter(<Home />);
    const h1 = screen.queryByText(BRAND_NAME);

    expect(h1).toBeInTheDocument();
  });

  test("Landing on a bad page and render home page", () => {
    const badRoute = "/some/bad/route";

    // use <MemoryRouter> when you want to manually control the history
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <Home />
      </MemoryRouter>
    );

    const h1 = screen.queryByText(BRAND_NAME);
    expect(h1).toBeInTheDocument();
  });
});

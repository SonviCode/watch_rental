import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "./utils/testUtils";

describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    renderWithRouter("/");
    const h1 = screen.getByTestId("home-title");

    expect(h1).toBeInTheDocument();
  });

  it("Landing on a bad page and render home page", () => {
    renderWithRouter("/bad-route");

    const h1 = screen.getByTestId("home-title");
    expect(h1).toBeInTheDocument();
  });
});

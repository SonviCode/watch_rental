import Home from "@/views/Home/Home";
import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "../utils/testUtils";
import Contact from "@/views/Contact/Contact";

describe("Renders main page correctly", () => {
  it("Should render the page correctly", () => {
    renderWithRouter(<Home />, "/");
    const h1 = screen.getByTestId("home-title");

    expect(h1).toBeInTheDocument();
  });

  it("Landing on a bad page and render home page", () => {
    renderWithRouter(<Home />, "/bad-route");

    const h1 = screen.getByTestId("home-title");
    expect(h1).toBeInTheDocument();
  });

  it("Should render the contact page correctly", () => {
    renderWithRouter(<Contact />, "/contact");

    expect(screen.getByTestId("contact-title")).toBeInTheDocument();
  });
});

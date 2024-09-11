import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/views/Home/Home";
import { BRAND_NAME } from "@/constants/Constants";
import { MemoryRouter } from "react-router-dom";

describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<MemoryRouter><Home /></MemoryRouter>);
    const h1 = screen.queryByText(BRAND_NAME);

    // Expectations
    expect(h1).not.toBeNull();
  });
});

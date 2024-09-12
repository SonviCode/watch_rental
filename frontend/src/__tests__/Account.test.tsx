import Account from "@/views/Account/Account";
import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouter } from "./utils/testUtils";

describe("Renders account page correctly", async () => {
  it("Should not render the account page if user is not connected", async () => {
    renderWithRouter(<Account />)

    expect(screen.queryByTestId("account-title")).not.toBeInTheDocument();
  });

  it("Should render the login if user is not connected", async () => {
    renderWithRouter(<Account />);

    waitFor(() => expect("login-btn").toBeInTheDocument());
  });
});

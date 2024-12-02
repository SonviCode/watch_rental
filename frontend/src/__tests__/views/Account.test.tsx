import * as ProtectedAuthRoute from "@/router/ProtectedAuthRoute";
import Account from "@/views/Account/Account";
import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { generateFakeUser } from "../fakeData/fakeUser";
import { renderWithRouter } from "../utils/testUtils";

describe("Renders account page correctly", async () => {
  it("Should not render the account page if user is not connected", async () => {
    const useUserOutletContextSpy = vi.spyOn(
      ProtectedAuthRoute,
      "useUserOutletContext"
    );
    const user = undefined;
    useUserOutletContextSpy.mockReturnValue({
      isLoading: false,
      user,
    });

    renderWithRouter(<Account />, "/account");

    await waitFor(() =>
      expect(screen.queryByTestId("account-title")).not.toBeInTheDocument()
    );
  });

  it("Should render the login if user is not connected", async () => {
    const useUserOutletContextSpy = vi.spyOn(
      ProtectedAuthRoute,
      "useUserOutletContext"
    );
    const user = generateFakeUser();
    useUserOutletContextSpy.mockReturnValue({
      isLoading: false,
      user,
    });
    renderWithRouter(<Account />, "/account");

    await waitFor(() =>
      expect(screen.queryByTestId("login-btn")).toBeInTheDocument()
    );
  });
});

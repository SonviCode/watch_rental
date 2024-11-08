import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi, beforeAll, afterAll } from "vitest";
import { renderWithRouter, renderWithRouterPath } from "../utils/testUtils";
import Account from "@/views/Account/Account";
import { useUserOutletContext } from "@/router/ProtectedAuthRoute";
import * as ProtectedAuthRoute from "@/router/ProtectedAuthRoute";

// global.fetch = vi.fn();

//Spy on the global fetch function
// const fetchSpy = vi.spyOn(global, "fetch");

// //Run before all the tests
// beforeAll(() => {
//   //Mock the return value of the global fetch function
//   const mockResolveValue = {
//     ok: true,
//     json: () =>
//       new Promise((resolve) =>
//         resolve([
//           {
//             id: 1,
//             title: "T-shirt",
//             price: 109.95,
//             Description: "A nice t-shirt",
//           },
//         ])
//       ),
//   };
//   fetchSpy.mockReturnValue(mockResolveValue as any);
// });

// //Run after all the tests
// afterAll(() => {
//   fetchSpy.mockRestore();
// });

// const protectedAuthRouteSpy = vi.spyOn(
//   ProtectedAuthRoute,
//   "ProtectedAuthRoute"
// );
// const user = undefined;
// protectedAuthRouteSpy.mockReturnValue({
//   isLoading: false,
//   user,
// });
describe("Renders account page correctly", async () => {
  const useUserOutletContextSpy = vi.spyOn(
    ProtectedAuthRoute,
    "useUserOutletContext"
  );
  const user = undefined;
  useUserOutletContextSpy.mockReturnValue({
    isLoading: false,
    user,
  });

  it("Should not render the account page if user is not connected", async () => {
    // renderWithRouterPath(<Account />, "/account");
    renderWithRouter(<Account />, "/account");

    expect(screen.getByTestId("account-title")).not.toBeInTheDocument();
  });

  // it("Should render the login if user is not connected", async () => {
  //   renderWithRouter(<Account />, "/account");

  //   expect(screen.getByTestId("login-btn")).toBeInTheDocument();
  //   // await waitFor(() =>
  //   //   expect(screen.getByTestId("login-btn")).toBeInTheDocument()
  //   // );
  // });
});

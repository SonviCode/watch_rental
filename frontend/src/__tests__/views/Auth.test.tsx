import Login from "@/views/Auth/Login/Login";
import SignUp from "@/views/Auth/SignUp/SignUp";
import {
  screen,
  waitFor
} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithRouterPath } from "../utils/testUtils";

// global.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ token: "fakeToken" }),
//   })
// );

describe("Login Page", () => {
  //Spy on the global fetch function
  // const fetchSpy = vi.spyOn(window, "fetch");

  // //Run before all the tests
  // beforeAll(() => {
  //   global.fetch = vi.fn();
    //Mock the return value of the global fetch function
    // const mockResolveValue = {
    //   ok: true,
    //   json: () =>
    //     new Promise((resolve) =>
    //       resolve([
    //         {
    //           id: 1,
    //           user: "user_test",
    //         },
    //       ])
    //     ),
    // };
    // fetchSpy.mockReturnValue(mockResolveValue as any);
  // });

  // //Run after all the tests
  // afterAll(() => {
  //   fetchSpy.mockRestore();
  // });

  it("render signup", async () => {
    renderWithRouterPath(<SignUp />, "/signup");

    await waitFor(() =>
      expect(screen.getByTestId("signup-btn")).toBeInTheDocument()
    );
  });

  it("render login", async () => {
    renderWithRouterPath(<Login />, "/login");

    // expect(screen.getByTestId("login-btn")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByTestId("login-btn")).toBeInTheDocument()
    );
  });
  //   it("permet à un utilisateur de se connecter avec des informations valides", async () => {
  //     // Mock de l'appel API de connexion
  //     const fetch = vi.fn(() =>
  //       Promise.resolve({
  //         json: () => Promise.resolve({ token: "fakeToken" }),
  //       })
  //     );

  //     renderWithRouter("/login");

  //     // Remplir le formulaire de connexion
  //     fireEvent.change(screen.getByLabelText("Email"), {
  //       target: { value: "test@example.com" },
  //     });
  //     fireEvent.change(screen.getByLabelText(/password/i), {
  //       target: { value: "password" },
  //     });

  //     // Cliquer sur le bouton de connexion
  //     fireEvent.click(screen.getByRole("button", { name: /login/i }));

  //     // Attendre la redirection ou le message de succès
  //     await waitFor(() => {
  //       expect(screen.getByText(/bienvenue/i)).toBeInTheDocument();
  //     });

  //     // Vérifier si le token a bien été enregistré dans le contexte d'authentification
  //     expect(fetch).toHaveBeenCalledWith("/api/auth/login", expect.anything());
  //   });
});

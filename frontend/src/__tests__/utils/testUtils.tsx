import { routes } from "@/router/router";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

//  const RouterWrapper = <RouterProvider router={router} />;
// const RouterWrapper = ({ children }) => ;

/**
 * doc : https://testing-library.com/docs/example-react-router/
 * stackoverflow : https://stackoverflow.com/questions/74399490/how-to-test-routing-logic-with-react-router-v6-and-testing-library
 *
 * @param ui
 * @param route
 * @returns
 */
export const renderWithRouter = (route = "/") => {
  window.history.pushState({}, "Test page", route);

  const router = createMemoryRouter(routes);

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={router} />),
  };
};

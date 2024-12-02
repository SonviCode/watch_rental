import { routes } from "@/router/router";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import {
  BrowserRouter,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";

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
// export const renderWithRouter = (route = "/") => {
//   // export const renderWithRouter = (ui: React.ReactNode, route = "/") => {
//   console.log(route);

//   const router = createMemoryRouter(routes);
//   // const browserRouter = createBrowserRouter(routes);
//   // BrowserRouter(<RouterProvider router={router} />);

//   return {
//     user: userEvent.setup(),
//     ...render(<RouterProvider router={router} />),
//   };
// };

export const renderWithRouter = (
  ui: ReactElement,
  path = "/",
  options?: Omit<RenderOptions, "wrapper">
) => {
  window.history.pushState({}, "Test page", path);

  console.log(ui);
  

  const router = createMemoryRouter(routes, { initialEntries: [path] });

  return {
    user: userEvent.setup(),
    ...render(<RouterProvider router={router} />, { ...options }),
  };
};

export const renderWithRouterPath = (
  ui: React.ReactNode,
  route = "/"
  // options?: Omit<RenderOptions, "wrapper">
) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

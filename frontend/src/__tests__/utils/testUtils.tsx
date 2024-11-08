import { routes } from "@/router/router";
import { store } from "@/store/store";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { CLIENT_URL, SERVER_URL } from "../../constants/Constants";
import {
  BrowserRouter,
  createBrowserRouter,
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

  const { pathname } = new URL("http://localhost:5173" + path);

  // const router = createMemoryRouter(
  //   [{ path: pathname, element: <Provider store={store}>{ui}</Provider> }],
  //   { initialEntries: [path] }
  // );
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

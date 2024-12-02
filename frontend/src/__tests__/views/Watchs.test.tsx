import Watchs from "@/views/Watchs/Watchs";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { generateFakeWatches } from "../fakeData/fakeWatch";
import { renderWithRouter } from "../utils/testUtils";
// import * as React from "react";
import React from "react";

describe("Renders watches page", () => {
  // const useFetchDataSpy = vi.spyOn(useFetchDataHooks, "default");
  // useFetchDataSpy.mockReturnValue({
  //   isLoading: false,
  // });

  // it("Should render the page correctly", async () => {
  //   renderWithRouter(<Watchs />, "/watchs");

  //   expect(screen.getByTestId("watchs-title")).toBeInTheDocument();
  // });

  // it("Should not render watches when array is empty", async () => {
  //   const useStateSpy = vi.spyOn(React, "useState");
  //   useStateSpy.mockImplementationOnce(() => [[], vi.fn()]);

  //   renderWithRouter(<Watchs />, "/watchs");

  //   expect(screen.getByTestId("no-watches")).toBeInTheDocument();
  //   useStateSpy.mockRestore();
  // });

  it("Should render watches when array is not empty", async () => {
    const useStateSpy = vi.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [generateFakeWatches(5), vi.fn()]);

    renderWithRouter(<Watchs />, "/watchs");

    // await waitFor(() => {
    //   expect(screen.getByTestId("no-watches")).not.toBeInTheDocument();
    // });
    expect(screen.getByTestId("no-watches")).not.toBeInTheDocument();
    useStateSpy.mockRestore();
  });
});

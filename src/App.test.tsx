import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  const { baseElement, getByText } = render(<App />);
  screen.debug(); // KO
  // OK: getByText("Ready to create an app?");
  // KO: getByText("Wrong text")
  expect(baseElement).toBeDefined();
});

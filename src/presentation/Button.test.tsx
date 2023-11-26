import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button with correct text", () => {
  render(<Button title="Click me" onClick={() => {}} className="" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeTruthy;
});

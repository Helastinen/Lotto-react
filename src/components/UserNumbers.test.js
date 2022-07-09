import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import UserNumbers from "./UserNumbers";

test("User can select number from pool", () => {
  const selectedNumbers = [1, 3, 5, 12, 15, 22, 39];
  render(<UserNumbers selectedNumbers={selectedNumbers} />);
 
  const element = screen.getByText(/1, 3, 5, 12, 15, 22, 39/);
  expect(element).toBeDefined();
});
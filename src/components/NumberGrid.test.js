import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import arrayOfLottoNumbers from "../utils";
import NumberGrid from "./NumberGrid";

const expectedNumberPool = [
  1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];

test("arrayOfLottoNumbers creates 40 lottonumbers", () => {
  const lottoNumbers = arrayOfLottoNumbers(40);
  expect(lottoNumbers).toEqual(expectedNumberPool);
});

test("NumberGrid renders 40 lottonumbers", () => {
  render(<NumberGrid />);
  const element = screen.getByText(40);
  expect(element).toBeDefined();
});
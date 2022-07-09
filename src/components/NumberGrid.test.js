import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import arrayOfLottoNumbers from "../utils";
import NumberGrid from "./NumberGrid";

test("arrayOfLottoNumbers creates 40 lottonumbers", () => {
  const lottoNumbers = arrayOfLottoNumbers(40);
  expect(lottoNumbers).toContain(1);
  expect(lottoNumbers).toContain(40);
  expect(lottoNumbers).not.toContain(0);
  expect(lottoNumbers).not.toContain(41);
});

test("NumberGrid renders 40 lottonumbers", () => {
  render(<NumberGrid />);

  const element = screen.getByText(40);
  expect(element).toBeDefined();
});
/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import NumberGrid from "../components/NumberGrid";

test("NumberGrid renders 40 lottonumbers", () => {
	render(<NumberGrid />);
	const element = screen.getByText(40);
	expect(element).toBeDefined();
	screen.debug();
});
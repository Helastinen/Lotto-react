/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import WinningNumbers from "../components/WinningNumbers";

test("WinningNumbers renders 7 distinct numbers", () => {
	const winningNumbers = [1, 2, 3, 4, 5, 6, 7];
	render(<WinningNumbers winningNumbers={winningNumbers} />);
	screen.debug();
	const element = screen.getByText(/1, 2, 3, 4, 5, 6, 7/);
	expect(element).toBeDefined();
});
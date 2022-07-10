/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import UserNumbers from "../components/UserNumbers";

test("Users selected numbers show in UI", () => {
	const selectedNumbers = [1, 3, 5, 12, 15, 22, 39];
	render(<UserNumbers selectedNumbers={selectedNumbers} />);

	const element = screen.getByText(/1, 3, 5, 12, 15, 22, 39/);
	expect(element).toBeDefined();
	screen.debug(element);
});

test("User's numbers are sorted ascendingly", () => {
	const selectedNumbers = [11, 3, 12, 2, 39, 1, 38];
	render(<UserNumbers selectedNumbers={selectedNumbers} />);

	const element = screen.getByText(/1, 2, 3, 11, 12, 38, 39/);
	expect(element).toBeDefined();
});
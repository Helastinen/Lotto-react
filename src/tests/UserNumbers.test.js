/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import UserNumbers from "../components/UsersNumbers";



test("Users selected numbers are sorted and shown ascendingly", () => {
	const usersNumbers = [11, 3, 12, 2, 39, 1, 38];
	render(<UserNumbers usersNumbers={usersNumbers} />);

	const element = screen.getByText(/1, 2, 3, 11, 12, 38, 39/);
	expect(element).toBeDefined();
});
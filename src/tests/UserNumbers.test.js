/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import UserNumbers from "../components/UsersNumbers";

const usersNumbers = [11, 3, 12, 2, 39, 1, 38];

test("Users selected numbers are sorted and shown ascendingly", () => {
	render(<UserNumbers usersNumbers={usersNumbers} />);

	const element = screen.getByText(/1, 2, 3, 11, 12, 38, 39/);
	expect(element).toBeDefined();
});

/*test("User can select same number only once", () => {
	const element = screen.getByText(/1, 2, 3, 11, 12, 38, 39/);
});*/
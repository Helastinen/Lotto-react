/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import DrawnNumbers from "../components/DrawnNumbers";

describe("<DrawnNumbers />", () => {
	const drawnNumbers = [1, 2, 3, 4, 5, 6, 7];

	beforeEach(() => {
		render(<DrawnNumbers drawnNumbers={drawnNumbers} />);
	});

	test("renders 7 distinct numbers", async () => {
		const buttonList = await screen.findAllByRole("button");
		expect(buttonList.length).toBe(7);

		expect(buttonList[0]).toHaveTextContent("1");
		expect(buttonList[6]).toHaveTextContent("7");
	});
});
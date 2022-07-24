/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import NumberGrid from "../components/NumberGrid";

describe("<NumberGrid />", () => {
	const handleSelectNumber = jest.fn();
	const usersNumbers = [];

	beforeEach(() => {
		render(<NumberGrid handleSelectNumber={handleSelectNumber} usersNumbers={usersNumbers}/>);
	});

	test("renders it's children", async () => {
		const buttonList = await screen.findAllByRole("button");
		expect(buttonList.length).toBe(40);
	});

	test("renders lottonumbers 1 and 40", async () => {
		const buttonList = await screen.findAllByRole("button");

		expect(buttonList[0]).toHaveTextContent("1");
		expect(buttonList[39]).toHaveTextContent("40");
	});
});
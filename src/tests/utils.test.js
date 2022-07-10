/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";

import {
	numberPool,
	isDistinctNumber,
	hasReachedNumberLimit
} from "../utils";

const expectedNumberPool = [
	1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
	11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
	31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];

const selectedNumbers = [1, 3, 5, 12, 15, 22, 39];

test("numberPool() creates 40 lottonumbers", () => {
	const lottoNumbers = numberPool(40);
	expect(lottoNumbers).toEqual(expectedNumberPool);
});

test("isDistinctNumber() returns true for distinct numbers and false for non-distinct numbers", () => {
	const distinctNumber = 2;
	const nonDistinctNumber = 3;

	expect(isDistinctNumber(nonDistinctNumber, selectedNumbers)).toEqual(false);
	expect(isDistinctNumber(distinctNumber, selectedNumbers)).toEqual(true);
});

test("hasReachedNumberLimit() returns true when number limit is hit", () => {
	const numberLimitReached = 7;
	const numberLimitNotReached = 6;


	expect(hasReachedNumberLimit(numberLimitReached, selectedNumbers)).toEqual(true);
	expect(hasReachedNumberLimit(numberLimitNotReached, selectedNumbers)).toEqual(false);
});
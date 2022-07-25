/* eslint-disable no-undef */
import "@testing-library/jest-dom/extend-expect";

import {
	numberPool,
	isDistinctNumber,
	hasReachedNumberLimit,
	randomDrawnNumbers,
	usersWinningNumbers
} from "../utils";

const expectedNumberPool = [
	1,  2,  3,  4,  5,  6,  7,  8,  9, 10,
	11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
	31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];

const usersNumbers = [1, 3, 5, 12, 15, 22, 39];
const numberLimit = 7;

test("numberPool() creates 40 lottonumbers", () => {
	const lottoNumbers = numberPool(40);
	expect(lottoNumbers).toEqual(expectedNumberPool);
});

test("isDistinctNumber() returns true for distinct numbers and false for non-distinct numbers", () => {
	const distinctNumber = 2;
	const nonDistinctNumber = 3;

	expect(isDistinctNumber(nonDistinctNumber, usersNumbers)).toEqual(false);
	expect(isDistinctNumber(distinctNumber, usersNumbers)).toEqual(true);
});

test("hasReachedNumberLimit() returns true when number limit is hit", () => {
	const sixUsersNumbers = [1, 3, 5, 12, 15, 22 ];

	expect(hasReachedNumberLimit(numberLimit, usersNumbers)).toEqual(true);
	expect(hasReachedNumberLimit(numberLimit, sixUsersNumbers)).toEqual(false);
});

test("randomDrawnNumbers() returns seven distinct drawn numbers", () => {
	const drawnNumbers = randomDrawnNumbers(numberLimit, expectedNumberPool);
	expect(drawnNumbers).toHaveLength(numberLimit);

	const drawnNumbersSet = new Set(drawnNumbers);
	console.log("drawnNumbersSet:", drawnNumbersSet);
	expect(drawnNumbersSet.size).toEqual(drawnNumbers.length);
});

test.only("usersWinningNumbers() returns only winning numbers", () => {
	const drawnNumbers = [22, 2, 7, 11, 12, 15, 30 ];
	const winningNumbers = usersWinningNumbers(usersNumbers, drawnNumbers);
	console.log("winningNumbers: ", winningNumbers);
	expect(winningNumbers).toHaveLength(3);

});
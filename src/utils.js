export const numberPool = (numberAmount) => {
	return [...Array(numberAmount).keys()].map(n => ++n);
};

export const isDistinctNumber = (number, numberArray) => {
	return numberArray.includes(number) ? false : true;
};

export const hasReachedNumberLimit = (limit, numberArray) => {
	return numberArray.length >= limit ? true : false;
};

export const randomDrawnNumbers = (numberAmount, numberPool) => {
	let shuffledPool = numberPool
		.map(number => ({ number, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ number }) => number);

	return shuffledPool.slice(0, numberAmount);
};

export const usersWinningNumbers = (drawnNumbers, usersNumbers) => {
	return usersNumbers.filter(number => drawnNumbers.includes(number));
};
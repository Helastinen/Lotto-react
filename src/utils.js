export const numberPool = (numberAmount) => {
	return [...Array(numberAmount).keys()].map(n => ++n);
};

export const isDistinctNumber = (number, numberArray) => {
	return numberArray.includes(number) ? false : true;
};

export const hasReachedNumberLimit = (limit, numberArray) => {
	return numberArray.length >= limit ? true : false;
};
export const numberPool = (numberAmount) => {
  return [...Array(numberAmount).keys()].map(n => ++n);
};

export const isDistinctNumber = (number, numberArray) => {
  return numberArray.includes(number) ? false : true;
}
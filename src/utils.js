const numberPool = (numberAmount) => {
  return [...Array(numberAmount).keys()].map(n => ++n);
};

export default numberPool;
const arrayOfLottoNumbers = (numberAmount) => {
  return [...Array(numberAmount).keys()].map(n => ++n);
};

export default arrayOfLottoNumbers;
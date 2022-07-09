import arrayOfLottoNumbers from "../utils";

const LottoNumber = ({ number, handleSelectNumber }) => {
  return (
    <li style={{ 
      float: "left", 
      listStyleType: "none",
      padding: 5,
    }}>
      <button value={number} onClick={handleSelectNumber}>{number}</button>
    </li>
  )
};

const NumberGrid = ({ handleSelectNumber }) => {
  const lottoNumbers = arrayOfLottoNumbers(40);
  console.log("lottonumbers array:", lottoNumbers);
  
  return (
    <div>
      <ul>
        {lottoNumbers.map(number => 
          <LottoNumber 
            key={number}
            number={number}
            handleSelectNumber={handleSelectNumber}
          />
        )}
      </ul>
    </div>
  )
};

export default NumberGrid;
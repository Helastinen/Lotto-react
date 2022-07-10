import { numberPool } from "../utils";
import configData from "../configData.json";

const LottoNumber = ({ number, handleSelectNumber }) => {
	return (
		<li style={{
			float: "left",
			listStyleType: "none",
			padding: 5,
		}}>
			<button value={number} onClick={handleSelectNumber}>{number}</button>
		</li>
	);
};

const NumberGrid = ({ handleSelectNumber }) => {
	const lottoNumbers = numberPool(configData.numberPool);
	//console.log("lottonumbers array:", lottoNumbers);

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
	);
};

export default NumberGrid;
import { Button, List, ListItem } from "@mui/material";

import { numberPool } from "../utils";
import configData from "../configData.json";

const LottoNumber = ({ number, usersNumbers, handleSelectNumber }) => {
	let currentVariant = "outlined";
	if ( usersNumbers.includes(number) ) {
		currentVariant = "contained";
	}

	return (
		<ListItem style={{
			display: "inline",
			listStyleType: "none",
			padding: 5,
			margin: 5,
		}}>
			<Button
				variant={currentVariant}
				value={number}
				onClick={handleSelectNumber}
			>
				{number}
			</Button>
		</ListItem>
	);
};

const NumberGrid = ({ usersNumbers, handleSelectNumber }) => {
	const lottoNumbers = numberPool(configData.numberPool);
	//console.log("lottonumbers array:", lottoNumbers);

	return (
		<div>
			<List>
				{lottoNumbers.map(number =>
					<LottoNumber
						key={number}
						number={number}
						usersNumbers={usersNumbers}
						handleSelectNumber={handleSelectNumber}
					/>
				)}
			</List>
		</div>
	);
};

export default NumberGrid;
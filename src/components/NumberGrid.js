import { Badge, Button, Card, List, ListItem } from "@mui/material";

import { numberPool, usersWinningNumbers } from "../utils";
import config from "../configData.json";

const LottoNumber = ({ number, usersNumbers, winningNumbers, handleSelectNumber }) => {
	let badgeContent = 0;
	if ( winningNumbers && winningNumbers.includes(number) ) {
		badgeContent = "win";
	}


	let currentVariant = "outlined";
	if ( usersNumbers && usersNumbers.includes(number) ) {
		currentVariant = "contained";
	}

	return (
		<ListItem style={{
			display: "inline",
			listStyleType: "none",
			padding: 5,
			margin: 5,
		}}>
			<Badge badgeContent={badgeContent} overlap="circular" color="success">
				<Button
					variant={currentVariant}
					value={number}
					onClick={handleSelectNumber}
				>
					{number}
				</Button>
			</Badge>
		</ListItem>
	);
};

const NumberGrid = ({ drawnNumbers, usersNumbers, handleSelectNumber }) => {
	const lottoNumbers = numberPool(config.numberPool);
	const winningNumbers = usersWinningNumbers(drawnNumbers, usersNumbers);
	console.log("Numbergrid.js -> <NumberGrid/> -> winningNumbers: ", winningNumbers);

	return (
		<div>
			<Card sx={{ padding: 2 }} >
				<List>
					{lottoNumbers.map(number =>
						<LottoNumber
							key={number}
							number={number}
							usersNumbers={usersNumbers}
							winningNumbers={winningNumbers}
							handleSelectNumber={handleSelectNumber}
						/>
					)}
				</List>
			</Card>
		</div>
	);
};

export default NumberGrid;
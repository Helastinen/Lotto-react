import { Button, Typography } from "@mui/material";
import { usersWinningNumbers } from "../utils";

const WinningNumber = ({ number }) => {
	return (
		<Button variant="contained" color="success" sx={{ m:1 }}>
			{number}
		</Button>
	);
};

const WinningNumbers = ({ drawnNumbers, usersNumbers }) => {
	const winningNumbers = usersWinningNumbers(drawnNumbers, usersNumbers);

	return (
		<div>
			<Typography variant="h5" m={1}>Your winning numbers:{" "}</Typography>
			{winningNumbers
				.sort((a, b) => a - b)
				.map(number =>
					<WinningNumber key={number} number={number} />
				)
			}
		</div>
	);
};

export default WinningNumbers;
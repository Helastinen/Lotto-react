import { Button, Card,  Typography } from "@mui/material";
import { usersWinningNumbers } from "../utils";

const WinningNumber = ({ number }) => {
	return (
		<Button variant="contained" color="success" sx={{ m:1 }}>
			{number}
		</Button>
	);
};

const WinningNumbers = ({ drawnNumbers, usersNumbers }) => {
	if ( !drawnNumbers || drawnNumbers.length === 0 ) return null;

	const winningNumbers = usersWinningNumbers(drawnNumbers, usersNumbers);

	return (
		<>
			<Card sx={{ padding: 2 }}>
				<Typography variant="h5" m={1}>
					Your winning numbers
				</Typography>
				{winningNumbers
					.sort((a, b) => a - b)
					.map(number =>
						<WinningNumber key={number} number={number} />
					)
				}
			</Card>
		</>
	);
};

export default WinningNumbers;
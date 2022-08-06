import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { usersWinningNumbers } from "../utils";
import winningballs from "../static/winningballs.png";

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
		<div>
			<Card sx={{ padding: 2 }}>
				<Grid container spacing={2} justifyContent="space-evenly">
					<Grid item sx={8}>
						<Typography variant="h5" m={1}>
							Your winning numbers
						</Typography>
						{winningNumbers
							.sort((a, b) => a - b)
							.map(number =>
								<WinningNumber key={number} number={number} />
							)
						}
					</Grid>
					<Grid item sx={4}>
						<CardMedia
							square
							component="img"
							height="120"
							image={winningballs}
							alt="lottery balls"/>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

export default WinningNumbers;
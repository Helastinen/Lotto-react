import { Button, Typography } from "@mui/material";

const WinningNumbers = ({ winningNumbers }) => {
	console.log("winningNumbers: ", winningNumbers);
	if ( !winningNumbers || winningNumbers.length === 0 ) return null;

	return (
		<div>
			<Typography variant="h5" m={1}>
				Winning numbers:{" "}
			</Typography>
			{winningNumbers
				.sort((a,b) => a - b )
				.map(number =>
					<Button
						key={number}
						variant="contained"
						color="secondary"
						sx={{ m:1 }}
					>
						{number}
					</Button>
				)
			}
		</div>
	);
};

export default WinningNumbers;
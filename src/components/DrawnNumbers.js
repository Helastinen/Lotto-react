import { Button, Typography } from "@mui/material";

const DrawnNumbers = ({ drawnNumbers }) => {
	console.log("drawnNumbers: ", drawnNumbers);
	if ( !drawnNumbers || drawnNumbers.length === 0 ) return null;

	return (
		<div>
			<Typography variant="h5" m={1}>
				Drawn numbers:{" "}
			</Typography>
			{drawnNumbers
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

export default DrawnNumbers;
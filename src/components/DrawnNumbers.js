import { Button, Card, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { drawnNumberTheme } from "../themes.js";

const DrawnNumber = ({ number }) => {
	return (
		<ThemeProvider theme={drawnNumberTheme}>
			<Button variant="contained" color="warning" sx={{ m:1 }}>
				{number}
			</Button>
		</ThemeProvider>
	);
};
const DrawnNumbers = ({ drawnNumbers }) => {
	if ( !drawnNumbers || drawnNumbers.length === 0 ) return null;

	return (
		<>
			<Card sx={{ padding: 2 }} >
				<Typography variant="h5" m={1}>
					Drawn numbers
				</Typography>
				{drawnNumbers
					.sort((a,b) => a - b )
					.map(number =>
						<DrawnNumber key={number} number={number} />
					)
				}
			</Card>
		</>
	);
};

export default DrawnNumbers;
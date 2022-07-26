import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// eslint-disable-next-line no-unused-vars
const theme = createTheme({
	palette: {
		warning: {
			main: "#ffa500",
		}
	}
});

const DrawnNumber = ({ number }) => {
	return (
		<ThemeProvider theme={theme}>
			<Button variant="contained" color="warning" sx={{ m:1 }}>
				{number}
			</Button>
		</ThemeProvider>
	);
};
const DrawnNumbers = ({ drawnNumbers }) => {
	if ( !drawnNumbers || drawnNumbers.length === 0 ) return null;

	return (
		<div>
			<Typography variant="h5" m={1}>
				Drawn numbers:{" "}
			</Typography>
			{drawnNumbers
				.sort((a,b) => a - b )
				.map(number =>
					<DrawnNumber key={number} number={number} />
				)
			}
		</div>
	);
};

export default DrawnNumbers;
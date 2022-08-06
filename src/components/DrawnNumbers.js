import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { drawnNumberTheme } from "../themes.js";
import lotteryballs from "../static/lotteryballs.png";


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
		<div>
			<Card sx={{ padding: 2 }} >
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<CardMedia
							square
							component="img"
							height="120"
							width="120"
							image={lotteryballs}
							alt="lottery balls"
						/>
					</Grid>
					<Grid item xs={8}>
						<Typography variant="h5" m={1}>
							Drawn numbers
						</Typography>
						{drawnNumbers
							.sort((a,b) => a - b )
							.map(number =>
								<DrawnNumber key={number} number={number} />
							)
						}
					</Grid>
				</Grid>
			</Card>
		</div>
	);
};

export default DrawnNumbers;
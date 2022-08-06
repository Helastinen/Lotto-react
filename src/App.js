import{ useState } from  "react";
import { Box,	CssBaseline, Grid, Container } from "@mui/material";

import IntroText from "./components/IntroText";
import StartLottery from "./components/StartLottery";
import ButtonPopOver from "./components/ButtonPopover";
import NumberGrid from "./components/NumberGrid";
import DrawnNumbers from "./components/DrawnNumbers";
import WinningNumbers from "./components/WinningNumbers";

import {
	isDistinctNumber,
	hasReachedNumberLimit,
	randomDrawnNumbers,
	numberPool
} from "./utils";
import config from "./configData.json";


function App () {
	const [usersNumbers, setUsersNumbers] = useState([]);
	const [drawnNumbers, setDrawnNumbers] = useState([]);
	console.log("App.js -> drawnNumbers: ", drawnNumbers);

	const handleSelectNumber = (event) => {
		const number = Number(event.target.value);

		if ( isDistinctNumber(number, usersNumbers) ) {
			if ( hasReachedNumberLimit(config.usersSelectedNumberAmount, usersNumbers) ) {
				return alert(`You have already selected all ${config.usersSelectedNumberAmount} lotto numbers!`);
			}

			return setUsersNumbers(usersNumbers.concat(number));
		}

		setUsersNumbers(usersNumbers.filter(n => n !== number));
		//console.log("button", event.target.value, "pressed");
	};

	const handleStartLottery = () => {
		if ( !hasReachedNumberLimit(config.usersSelectedNumberAmount, usersNumbers) ) {
			return alert(`Please select all ${config.usersSelectedNumberAmount} lotto numbers!`);
		}

		const lotteryDrawNumbers = randomDrawnNumbers(config.drawnNumberAmount, numberPool(config.numberPool));
		console.log("App.js -> handleStartLottery() -> lotteryDrawNumbers: ", lotteryDrawNumbers);
		setDrawnNumbers(lotteryDrawNumbers);
	};

	return (
		<>
			<CssBaseline />

			<Container maxWidth="md" align="center">
				<Box sx={{ bgcolor: "#f5f5f5", m:2, p:2 }}>
					<IntroText />

					<Box sx={{ m: 3 }}>
						<Grid container spacing={2} justifyContent="center" >
							<Grid item sx={8}>
								<StartLottery
									handleStartLottery={handleStartLottery}
									usersNumbers={usersNumbers}
								/>
							</Grid>
							<Grid item sx={4}>
								<ButtonPopOver />
							</Grid>
						</Grid>
					</Box>

					<Box component="block">
						<NumberGrid
							handleSelectNumber={handleSelectNumber}
							drawnNumbers={drawnNumbers}
							usersNumbers={usersNumbers}
						/>
					</Box>

					<Grid container spacing={2}>
						<Grid item sx={6}>
							<Box sx={{ m: 2 }}>
								<DrawnNumbers drawnNumbers={drawnNumbers} />
							</Box>
						</Grid>
						<Grid item sx={6}>
							<Box sx={{ m: 2 }}>
								<WinningNumbers drawnNumbers={drawnNumbers} usersNumbers={usersNumbers}/>
							</Box>
						</Grid>
					</Grid>
				</Box>

			</Container>
		</>
	);
}

export default App;
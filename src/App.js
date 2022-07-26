import{ useState } from  "react";
import {
	Box,	CssBaseline,
	Container, Divider, Typography
} from "@mui/material";

import IntroText from "./components/IntroText";
import NumberGrid from "./components/NumberGrid";
import StartLottery from "./components/StartLottery";
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

	const handleSelectNumber = (event) => {
		const number = Number(event.target.value);

		if ( isDistinctNumber(number, usersNumbers) ) {
			if ( hasReachedNumberLimit(config.usersSelectedNumberAmount, usersNumbers) ) {
				return alert(`You have already selected all ${config.usersSelectedNumberAmount} lotto numbers!`);
			}

			return setUsersNumbers(usersNumbers.concat(number));
		}

		setUsersNumbers(usersNumbers.filter(n => n !== number));
		console.log("button", event.target.value, "pressed");
	};

	const handleStartLottery = () => {
		if ( !hasReachedNumberLimit(config.usersSelectedNumberAmount, usersNumbers) ) {
			return alert(`Please select all ${config.usersSelectedNumberAmount} lotto numbers!`);
		}

		const numbers = randomDrawnNumbers(config.drawnNumberAmount, numberPool(config.numberPool));
		setDrawnNumbers(numbers);
		console.log("DrawnNumbers: ", drawnNumbers);
	};

	return (
		<>
			<CssBaseline />

			<Container maxWidth="md" align="center">
				<Box sx={{ bgcolor: "#f5f5f5", m:2, p:2 }}>
					<Typography variant="h3" m={3}>$uperLottery</Typography>
					<IntroText />

					<Divider>Select your <b>seven</b> lucky lottery numbers</Divider>
					<Box component="block">
						<NumberGrid handleSelectNumber={handleSelectNumber} usersNumbers={usersNumbers} />
					</Box>
					<Divider />

					<Box sx={{ m: 3 }}>
						<StartLottery handleStartLottery={handleStartLottery} usersNumbers={usersNumbers} />
					</Box>

					<Box sx={{ m: 3 }}>
						<DrawnNumbers drawnNumbers={drawnNumbers} />
					</Box>

					<Box sx={{ m: 3 }}>
						<WinningNumbers drawnNumbers={drawnNumbers} usersNumbers={usersNumbers} />
					</Box>
				</Box>
			</Container>
		</>
	);
}

export default App;
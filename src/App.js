import{ useState } from  "react";
import {
	Box,	Button,	CssBaseline,
	Container, Divider, Typography
} from "@mui/material";

import StartIcon from "@mui/icons-material/Start";

import IntroText from "./components/IntroText";
import NumberGrid from "./components/NumberGrid";
import UsersNumbers from "./components/UsersNumbers";
import WinningNumbers from "./components/WinningNumbers";
import {
	isDistinctNumber,
	hasReachedNumberLimit,
	randomWinningNumbers,
	numberPool
} from "./utils";
import configData from "./configData.json";

function App () {
	const [usersNumbers, setUsersNumbers] = useState([]);
	const [winningNumbers, setWinningNumbers] = useState([]);

	const handleSelectNumber = (event) => {
		if ( !isDistinctNumber(event.target.value, usersNumbers) ) {
			return alert(`Number ${event.target.value} has already been selected!`);
		}

		if ( hasReachedNumberLimit(configData.usersSelectedNumberAmount, usersNumbers) ) {
			return alert(`You have already selected all ${configData.usersSelectedNumberAmount} lotto numbers!`);
		}

		setUsersNumbers(usersNumbers.concat(Number(event.target.value)));
		console.log("button", event.target.value, "selected");
	};

	const handleStartLottery = () => {
		if ( !hasReachedNumberLimit(configData.usersSelectedNumberAmount, usersNumbers) ) {
			return alert(`Please select all ${configData.usersSelectedNumberAmount} lotto numbers!`);
		}

		const numbers = randomWinningNumbers(configData.winningNumberAmount, numberPool(configData.numberPool));
		setWinningNumbers(numbers);
		console.log("WinningNumbers: ", winningNumbers);
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
						<NumberGrid handleSelectNumber={handleSelectNumber} />
					</Box>
					<Divider />

					<Box sx={{ m: 3 }}>
						<UsersNumbers usersNumbers={usersNumbers} />
					</Box>

					<Box sx={{ m: 3 }}>
						<Button
							variant="contained"
							size="large"
							sx={{ pl:4, pr:4 }}
							endIcon={<StartIcon />}
							onClick={handleStartLottery}
						>
						Start lottery
						</Button>
					</Box>

					<Box sx={{ m: 3 }}>
						<WinningNumbers winningNumbers={winningNumbers} />
					</Box>
				</Box>
			</Container>
		</>
	);
}

export default App;
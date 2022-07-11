import{ useState } from  "react";

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

		if ( hasReachedNumberLimit(configData.selectedNumberAmount, usersNumbers) ) {
			return alert(`You have already selected all ${configData.selectedNumberAmount} lotto numbers!`);
		}

		setUsersNumbers(usersNumbers.concat(event.target.value));
		console.log("button", event.target.value, "selected");
	};

	const handleStartLottery = () => {
		if ( !hasReachedNumberLimit(configData.selectedNumberAmount, usersNumbers) ) {
			return alert(`Please select all ${configData.selectedNumberAmount} lotto numbers!`);
		}

		const numbers = randomWinningNumbers(configData.winningNumberAmount, numberPool(configData.numberPool));
		setWinningNumbers(numbers);
		console.log("WinningNumbers: ", winningNumbers);
	};

	return (
		<div>
			<h1>Lotto App</h1>
      Select your <b>seven</b> lucky lotto numbers!
			<NumberGrid handleSelectNumber={handleSelectNumber} />
			<UsersNumbers usersNumbers={usersNumbers} />
			<button onClick={handleStartLottery}>Start lottery!</button>
			<WinningNumbers winningNumbers={winningNumbers} />
		</div>
	);
}

export default App;
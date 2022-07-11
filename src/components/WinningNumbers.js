const WinningNumbers = ({ winningNumbers }) => {
	console.log("winningNumbers: ", winningNumbers);
	if ( !winningNumbers || winningNumbers.length === 0 ) return null;

	return (
		<div>
			Winning numbers:{" "}
			{winningNumbers
				.sort((a,b) => a - b )
				.map(number => `${number}, `)
			}
		</div>
	);
};

export default WinningNumbers;
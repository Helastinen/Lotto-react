const UserNumber = ({ number }) => {
	return `${number}, `;
};

const UserNumbers = ({ selectedNumbers }) => {
	return (
		<div>
      User`s numbers:{" "}
			{selectedNumbers
				.sort((a, b) => a - b)
				.map(number =>
					<UserNumber key={number} number={number} />
				)
			}
		</div>
	);
};

export default UserNumbers;
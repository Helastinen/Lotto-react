const UserNumber = ({ number }) => {
	return `${number}, `;
};

const UsersNumbers = ({ usersNumbers }) => {
	return (
		<div>
      User`s numbers:{" "}
			{usersNumbers
				.sort((a, b) => a - b)
				.map(number =>
					<UserNumber key={number} number={number} />
				)
			}
		</div>
	);
};

export default UsersNumbers;
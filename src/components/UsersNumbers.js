import { Button, Typography } from "@mui/material";

const UserNumber = ({ number }) => {
	return (
		<Button variant="contained" color="secondary">
			{number}
		</Button>
	);
};

const UsersNumbers = ({ usersNumbers }) => {
	return (
		<div>
			<Typography variant="h5" m={1}>Your numbers:{" "}</Typography>
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
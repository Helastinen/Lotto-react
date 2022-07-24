import { Button } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";

const StartLottery = ({ handleStartLottery, usersNumbers }) => {

	if (!usersNumbers || usersNumbers.length < 7 ) {
		return (
			<Button
				variant="contained"
				size="large"
				sx={{ pl:4, pr:4 }}
				endIcon={<StartIcon />}
				disabled
			>
			Start lottery
			</Button>
		);
	}

	return (
		<Button
			variant="contained"
			size="large"
			sx={{ pl:4, pr:4 }}
			endIcon={<StartIcon />}
			onClick={handleStartLottery}
		>
		Start lottery
		</Button>
	);
};

export default StartLottery;
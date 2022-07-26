import { Button } from "@mui/material";
import StartIcon from "@mui/icons-material/Start";
import config from "../configData.json";

const StartLottery = ({ handleStartLottery, usersNumbers }) => {

	if (!usersNumbers || usersNumbers.length < config.usersSelectedNumberAmount ) {
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
import { Grid, Typography } from "@mui/material";
import winningballs from "../static/winningballs.png";

const IntroText = () => {
	return (
		<div>
			<Grid container spacing={2} justifyContent="space-evenly">
				<Grid item sx={4}>
					<img src={winningballs} height="120" alt="winning lottery balls"></img>
				</Grid>
				<Grid item sx={8}>
					<Typography variant="h3" mb={2}>$uperLottery</Typography>
					<Typography variant="body1" mb={2}>
						Select your <b>seven</b> lucky numbers. <br/>
						Get at least four numbers correct to win.
						Good Luck!
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default IntroText;
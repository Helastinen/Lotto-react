import Typography from "@mui/material/Typography";

const IntroText = () => {
	return (
		<Typography variant="body1" mb={2}>
			Welcome to the SuperLottery app! Select seven numbers out of a pool of forty. Get at least four numbers correct to win some $$$! <br/>
			Your chance of winning the jackpot is one in 18,643,560 i.e. 0,0000053638 %.<br/>
			But do not fret! The chance to get four winning numbers is as high as 1,02 %.
		</Typography>
	);
};

export default IntroText;
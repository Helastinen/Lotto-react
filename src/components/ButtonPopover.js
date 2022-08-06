import { useState } from "react";
import { Button, Popover, Typography } from "@mui/material";

const ButtonPopOver = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<>
			<Button aria-describedby={id} variant="outlined" onClick={handleClick}>
        Winning odds
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
			>
				<Typography sx={{ p: 2 }}>
					Winning numbers # - chance to win:<br/>
					0 - 35 %<br/>
					1 - 23 %<br/>
					2 - 12 %<br/>
					3 - 3 %<br/>
					4 - 0.25 %<br/>
					5 - 1 in 1,003<br/>
					6 - 1 in 67,523<br/>
					7 - 1 in 2,035,800
				</Typography>
			</Popover>
		</>
	);
};

export default ButtonPopOver;
import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

const HomePage = () => {
	return (
		<Container
			sx={{
				bgcolor: "red",
			}}
		>
			<Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
		</Container>
	);
};

export default HomePage;

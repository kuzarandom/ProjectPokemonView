import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { useInView, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

type props = {
	delay?: number;
};

const CardInfo = ({ delay = 0, ...props }: props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			style={{
				margin: 10,
				maxWidth: 345,
				width: 345,
				opacity: isInView ? 1 : 0,
				transition: `opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
					(delay > 9 ? delay % 3 : delay % 9) + 1
				}00ms`,
				cursor: "pointer",
				userSelect: "none",
			}}
			{...props}
		>
			<Card>
				<CardMedia
					sx={{ height: 250 }}
					image="https://urbancreature.co/wp-content/uploads/2022/03/03-1024x683.jpg"
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
				{/* <CardActions>
					<Button size="small">Share</Button>
					<Button size="small">Learn More</Button>
				</CardActions> */}
			</Card>
		</motion.div>
	);
};

export default CardInfo;

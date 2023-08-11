/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Button, Container } from "@mui/material";

import { CardInfo } from "./Components";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { ApiConfigs } from "Configs";
import { useGetCardServiceMutation } from "Service/CardService";

const HomePage = () => {
	const test_array = [
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	];
	const [fnGetCardService, result] = useGetCardServiceMutation();
	const result_array = () => {
		const _array = test_array;
		const empty = 3 - (test_array.length % 3);
		if (empty === 0) {
			return test_array;
		} else {
			const __array = Array(empty).fill("added");

			__array.map(() => {
				_array.push("empty");
			});
			return _array;
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container
			sx={{
				bgcolor: "lightblue",
				height: "100%",
			}}
		>
			<Box
				sx={{
					bgcolor: "#cfe8fc",
					padding: 2,
					display: "flex",
					flexWrap: "wrap",
				}}
			>
				<div
					style={{
						backgroundColor: "#cfe8fc",
						display: "flex",
						flexWrap: "wrap",
						flexDirection: "row",
						justifyContent: "center",
						flex: 1,
					}}
				>
					{result_array().map((item, index) => {
						if (item !== "empty") {
							return <CardInfo key={index} delay={index} />;
						} else {
							return (
								<motion.div
									key={index}
									style={{
										maxWidth: 345,
										flex: 1,
										margin: 10,
										opacity: 0,
									}}
								></motion.div>
							);
						}
					})}
				</div>
			</Box>
		</Container>
	);
};

export default HomePage;

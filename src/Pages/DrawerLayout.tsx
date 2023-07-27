import React from "react";


const DrawerLayout = () => {
	const [size, setSize] = React.useState("xs");
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

	const handleOpen = (key: any) => {
		setOpen(true);
		setPlacement(key);
	};

	return (
		<>
			
		</>
	);
};

export default DrawerLayout;

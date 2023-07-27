import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "Pages/HomePage";
import { redirect, useNavigate, useNavigation } from "react-router-dom";


function App() {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/home')
	}, [])
	
	return (
		<div>
			{/* <header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" />
				<p className="text-ERROR" >
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
					<HomePage />
				</a> */}
			{/* </header> */}
		</div>
	);
}

export default App;

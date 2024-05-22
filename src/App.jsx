import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Scoreboard from './pages/Scoreboard';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={<Create />} />
				<Route path='/track' element={<Scoreboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Scoreboard from './pages/Scoreboard';
import { ROUTES } from './constants/ROUTES';

const App = () => {
	return (
		<BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
				<Route path={ROUTES.CREATE} element={<Create />} />
				<Route path={ROUTES.TRACK} element={<Scoreboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

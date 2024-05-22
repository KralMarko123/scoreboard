import React from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';
import './Home.css';

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className='home page'>
			<h1 className='title'>Marko's Scoreboard</h1>
			<h3 className='subtitle'>Create Players | Track Scores | Do Not Bother Me</h3>
			<button className='simple-button' onClick={() => navigate('/create')}>
				Start
			</button>
		</div>
	);
};

export default Home;

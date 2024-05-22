import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import './page.css';
import './Scoreboard.css';

const Scoreboard = () => {
	const location = useLocation();
	const players = location.state.players;
	const [scores, setScores] = useState({});

	const setInitialScores = () => {
		players.forEach((p) => {
			let updatedScores = scores;
			updatedScores[`${p}`] = 0;
			setScores({ ...updatedScores });
		});
	};

	useEffect(() => {
		setInitialScores();
	}, []);

	return (
		<div className='page score'>
			<h1 className='title'>Scoreboard</h1>
			<div className='player-board'>
				{players.map((p) => (
					<div className='player-board-tile' key={p}>
						<FaMinusCircle />
						<span>{`${p} - ${scores[`${p}`]}`}</span>
						<FaPlusCircle />
					</div>
				))}
			</div>
		</div>
	);
};

export default Scoreboard;

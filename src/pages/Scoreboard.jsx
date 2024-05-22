import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { TbSeparator } from 'react-icons/tb';
import ConfettiExplosion from 'react-confetti-explosion';
import './page.css';
import './Scoreboard.css';

const Scoreboard = () => {
	const location = useLocation();
	const [scores, setScores] = useState({});
	const [isExploding, setIsExploding] = useState(false);
	const navigate = useNavigate();

	const players = location.state.players;
	const playersThatShouldLose = ['marko', 'damjan'];
	const playersThatShouldWin = ['teodor'];

	const resetScores = () => {
		players.forEach((p) => {
			let updatedScores = scores;
			updatedScores[`${p}`] = 0;
			setScores({ ...updatedScores });
		});
	};

	useEffect(() => {
		resetScores();
	}, []);

	const updateScore = (p, decrease = false) => {
		let updatedScores = scores;
		if (decrease && updatedScores[`${p}`] == 0) return;

		decrease ? updatedScores[`${p}`]-- : updatedScores[`${p}`]++;
		setScores({ ...updatedScores });

		if (
			playersThatShouldWin.includes(p.toLowerCase()) ||
			(playersThatShouldLose.includes(p.toLowerCase()) && decrease)
		)
			setIsExploding(true);
	};

	return (
		<div className='page score'>
			<div>
				{isExploding && (
					<ConfettiExplosion particleCount={200} onComplete={() => setIsExploding(false)} />
				)}
			</div>

			<h1 className='title'>Scoreboard</h1>
			<div className='player-board'>
				{players.map((p) => (
					<div className='player-board-tile' key={p}>
						<FaMinusCircle className='icon-button' onClick={() => updateScore(p, true)} />
						<div className='player-info'>
							<p>{p}</p>
							<span>
								<TbSeparator />
							</span>
							<p>{scores[`${p}`]}</p>
						</div>
						<FaPlusCircle className='icon-button' onClick={() => updateScore(p)} />
					</div>
				))}
			</div>
			<div className='scoreboard-actions'>
				<button className='simple-button' onClick={() => navigate('/create')}>
					Back to Player Selection
				</button>
				<button className='simple-button' onClick={() => resetScores()}>
					Reset Scores
				</button>
			</div>
		</div>
	);
};

export default Scoreboard;

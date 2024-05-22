import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TiDelete } from 'react-icons/ti';
import './page.css';
import './Create.css';

const Create = () => {
	const [currentPlayer, setCurrentPlayer] = useState('');
	const [players, setPlayers] = useState([]);
	const inputRef = useRef();
	const navigate = useNavigate();

	const addPlayer = () => {
		if (currentPlayer.length === 0 || players.includes(currentPlayer)) return;

		setPlayers([...players, currentPlayer]);
		setCurrentPlayer('');
		inputRef.current.value = '';
	};

	const removePlayer = (p) => {
		setPlayers([...players.filter((x) => x !== p)]);
	};

	return (
		<div className='page create'>
			<h1 className='title'>Enter player Names</h1>
			<div className='first-section'>
				<div className='player-input'>
					<input
						className='simple-input'
						type='text'
						onChange={(e) => setCurrentPlayer(e.currentTarget.value)}
						ref={inputRef}
					/>
					<button className='simple-button' onClick={() => addPlayer()}>
						Add Player
					</button>
				</div>
			</div>
			<div className='second-section'>
				<div className='player-list'>
					{players.map((p) => (
						<div className='player' key={p}>
							<span>{p}</span>
							<TiDelete onClick={() => removePlayer(p)} />
						</div>
					))}
				</div>
			</div>
			<div className='third-section'>
				{players.length > 0 && (
					<button
						className='simple-button'
						onClick={() => navigate('/track', { state: { players: players } })}
					>
						Start
					</button>
				)}
			</div>
		</div>
	);
};

export default Create;

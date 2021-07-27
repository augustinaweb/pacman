import React from 'react';
import './App.css';
import { layout } from './helper';

const App = () => {
	const [currentPacmanIndex, setCurrentPacmanIndex] = React.useState(347);
	const setItemClass = (item: number, i: number) => {
		if (i === currentPacmanIndex) {
			return 'pac-man';
		}
		if (item === 0) {
			return 'empty';
		}
		if (item === 1) {
			return 'wall';
		}
		if (item === 2) {
			return 'pac-dot';
		}
		if (item === 3) {
			return 'ghost-lair';
		}
		if (item === 4) {
			return 'power-pellet';
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		console.log(event.key);
		//switch (event) {
		//	case '37':
		//		setCurrentPacmanIndex(currentPacmanIndex + 1);
		//}
	};

	document.addEventListener('keydown', () => handleKeyDown);
	return (
		<div className="game">
			<h1>
				Score:<span id="score">0</span>
			</h1>
			<div className="grid">
				{layout &&
					layout.map((item, i) => (
						<div key={i} className={setItemClass(item, i)}></div>
					))}
			</div>
		</div>
	);
};

export default App;

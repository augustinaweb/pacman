import React from "react";
import "./App.css";
import { layout, setItemClass, movePacman, moveBlinkyGhost } from "./helper";

const App = () => {
	const [currentPacmanIndex, setCurrentPacmanIndex] = React.useState(347);
	const [currentBlinkyIndex, setCurrentBlinkyIndex] = React.useState(250);
	const [currentPinkyIndex, setCurrentPinkyIndex] = React.useState(253);
	const [currentInkyIndex, setCurrentInkyIndex] = React.useState(274);
	const [currentClydeIndex, setCurrentClydeIndex] = React.useState(277);
	const [score, setScore] = React.useState(0);

	const onKeyUp = React.useCallback(
		(e) => {
			movePacman(
				e,
				currentPacmanIndex,
				setCurrentPacmanIndex,
				score,
				setScore
			);
		},
		[currentPacmanIndex, score]
	);

	React.useEffect(() => {
		document.addEventListener("keyup", onKeyUp);
		return () => document.removeEventListener("keyup", onKeyUp);
	}, [onKeyUp]);

	setInterval(
		() => moveBlinkyGhost(currentBlinkyIndex, setCurrentBlinkyIndex),
		3000
	);

	return (
		<div className="game">
			<h1>
				Score:<span id="score">{score}</span>
			</h1>
			<div className="grid">
				{layout &&
					layout.map((item, i) => (
						<div
							key={i}
							className={setItemClass(
								item,
								i,
								currentPacmanIndex,
								currentBlinkyIndex,
								currentPinkyIndex,
								currentInkyIndex,
								currentClydeIndex
							)}
						></div>
					))}
			</div>
			{score === 1720 && (
				<div className="status">
					<p>Congratulations - You Won!</p>
				</div>
			)}
			{layout[currentPacmanIndex] > 4 && layout[currentPacmanIndex] < 9 && (
				<div className="status">
					<p>Game Over!</p>
				</div>
			)}
		</div>
	);
};

export default App;

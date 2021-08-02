import React from "react";
import "./App.css";
import { layout, setItemClass, movePacman } from "./helper";

const App = () => {
	const [currentPacmanIndex, setCurrentPacmanIndex] = React.useState(347);
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
								currentPacmanIndex
							)}
						></div>
					))}
			</div>
			{score === 1720 && (
				<div className="status">
					<p>Congratulations - You've Won!</p>
				</div>
			)}
			{(layout[currentPacmanIndex] === 5 ||
				layout[currentPacmanIndex] === 6 ||
				layout[currentPacmanIndex] === 7 ||
				layout[currentPacmanIndex] === 8) && (
				<div className="status">
					<p>Game Over!</p>
				</div>
			)}
		</div>
	);
};

export default App;

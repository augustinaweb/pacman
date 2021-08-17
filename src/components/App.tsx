import React from "react";
import "../styles/App.css";
import { layout, setItemClass, moveGhost } from "../helpers/helper";
import { movePacman } from "../helpers/move.pacman";
import { Pacman } from "./pacman";
import { Ghost, GhostNames } from "./ghost";

const App = () => {
	const [currentPacmanIndex, setCurrentPacmanIndex] = React.useState(347);
	const [currentPacmanRotation, setCurrentPacmanRotation] = React.useState(0);
	const [currentBlinkyIndex, setCurrentBlinkyIndex] = React.useState(250);
	const [currentPinkyIndex, setCurrentPinkyIndex] = React.useState(253);
	const [currentInkyIndex, setCurrentInkyIndex] = React.useState(274);
	const [currentClydeIndex, setCurrentClydeIndex] = React.useState(277);
	const [scaredGhosts, setScaredGhosts] = React.useState(false);
	const [score, setScore] = React.useState(0);
	const [gameOn, setgameOn] = React.useState(true);

	const ghosts = React.useMemo(
		() => [
			currentBlinkyIndex,
			currentPinkyIndex,
			currentInkyIndex,
			currentClydeIndex
		],
		[
			currentBlinkyIndex,
			currentPinkyIndex,
			currentInkyIndex,
			currentClydeIndex
		]
	);

	const onKeyUp = React.useCallback(
		(e) => {
			movePacman(
				e,
				currentPacmanIndex,
				setCurrentPacmanIndex,
				score,
				setScore,
				setCurrentPacmanRotation,
				setScaredGhosts,
				gameOn
			);
		},
		[
			currentPacmanIndex,
			score,
			setCurrentPacmanRotation,
			setScaredGhosts,
			gameOn
		]
	);

	React.useEffect(() => {
		document.addEventListener("keydown", onKeyUp);
		return () => document.removeEventListener("keydown", onKeyUp);
	}, [onKeyUp]);

	React.useEffect(() => {
		if (gameOn) {
			const blinky = setInterval(
				() =>
					moveGhost(
						currentBlinkyIndex,
						setCurrentBlinkyIndex,
						ghosts
					),
				500
			);

			return () => {
				clearInterval(blinky);
			};
		}
	}, [currentBlinkyIndex, ghosts, gameOn]);

	React.useEffect(() => {
		if (gameOn) {
			const pinky = setInterval(
				() =>
					moveGhost(currentPinkyIndex, setCurrentPinkyIndex, ghosts),
				1000
			);
			return () => {
				clearInterval(pinky);
			};
		}
	}, [currentPinkyIndex, ghosts, gameOn]);

	React.useEffect(() => {
		if (gameOn) {
			const inky = setInterval(
				() => moveGhost(currentInkyIndex, setCurrentInkyIndex, ghosts),
				1000
			);
			return () => {
				clearInterval(inky);
			};
		}
	}, [currentInkyIndex, ghosts, gameOn]);

	React.useEffect(() => {
		if (gameOn) {
			const clyde = setInterval(
				() =>
					moveGhost(currentClydeIndex, setCurrentClydeIndex, ghosts),
				1000
			);
			return () => {
				clearInterval(clyde);
			};
		}
	}, [currentClydeIndex, ghosts, gameOn]);

	React.useEffect(() => {
		if (ghosts.includes(currentPacmanIndex)) {
			setgameOn(false);
		}
	}, [ghosts, currentPacmanIndex]);

	return (
		<div className="game">
			<h1>
				Score:<span id="score">{score}</span>
			</h1>
			<div className="grid">
				{layout &&
					layout.map((item, i) => (
						<div key={i} className={setItemClass(item)}></div>
					))}
				<Pacman
					currentIndex={currentPacmanIndex}
					currentRotation={currentPacmanRotation}
				/>
				<Ghost
					currentGhostIndex={currentBlinkyIndex}
					ghostName={GhostNames.blinky}
					scared={scaredGhosts}
				/>
				<Ghost
					currentGhostIndex={currentPinkyIndex}
					ghostName={GhostNames.pinky}
					scared={scaredGhosts}
				/>
				<Ghost
					currentGhostIndex={currentInkyIndex}
					ghostName={GhostNames.inky}
					scared={scaredGhosts}
				/>
				<Ghost
					currentGhostIndex={currentClydeIndex}
					ghostName={GhostNames.clyde}
					scared={scaredGhosts}
				/>
			</div>
			{score === 1720 && (
				<div className="status">
					<p>Congratulations - You Won!</p>
				</div>
			)}
			{ghosts.includes(currentPacmanIndex) && (
				<div className="status">
					<p>Game Over!</p>
				</div>
			)}
		</div>
	);
};

export default App;

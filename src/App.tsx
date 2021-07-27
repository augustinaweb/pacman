import React from "react";
import "./App.css";
import { layout, setItemClass, movePacman } from "./helper";

const App = () => {
	const [currentPacmanIndex, setCurrentPacmanIndex] = React.useState(347);

	document.addEventListener("keyup", (e) =>
		movePacman(e, currentPacmanIndex, setCurrentPacmanIndex)
	);

	return (
		<div className="game">
			<h1>
				Score:<span id="score">0</span>
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
		</div>
	);
};

export default App;

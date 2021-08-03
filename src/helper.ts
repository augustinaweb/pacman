export const movePacman = (
	e: KeyboardEvent,
	currentPacmanIndex: number,
	setCurrentPacmanIndex: (arg: number) => void,
	score: number,
	setScore: (arg: number) => void
) => {
	switch (e.key) {
		case "ArrowUp":
			e.preventDefault();
			if (
				currentPacmanIndex - 24 >= 0 &&
				layout[currentPacmanIndex - 24] !== 1
			) {
				if (layout[currentPacmanIndex - 24] === 2) {
					layout[currentPacmanIndex - 24] = 0;
					setScore(score + 10);
				}
				if (layout[currentPacmanIndex - 24] === 4) {
					layout[currentPacmanIndex - 24] = 0;
					setScore(score + 50);
				}
				setCurrentPacmanIndex(currentPacmanIndex - 24);
			}
			break;
		case "ArrowDown":
			e.preventDefault();
			if (
				currentPacmanIndex + 24 < 576 &&
				layout[currentPacmanIndex + 24] !== 1
			) {
				if (layout[currentPacmanIndex + 24] === 2) {
					layout[currentPacmanIndex + 24] = 0;
					setScore(score + 10);
				}
				if (layout[currentPacmanIndex + 24] === 4) {
					layout[currentPacmanIndex + 24] = 0;
					setScore(score + 50);
				}
				setCurrentPacmanIndex(currentPacmanIndex + 24);
			}
			break;
		case "ArrowLeft":
			e.preventDefault();
			if (
				currentPacmanIndex % 24 !== 0 &&
				currentPacmanIndex > 0 &&
				layout[currentPacmanIndex - 1] !== 1
			) {
				if (layout[currentPacmanIndex - 1] === 2) {
					layout[currentPacmanIndex - 1] = 0;
					setScore(score + 10);
				}
				if (layout[currentPacmanIndex - 1] === 4) {
					layout[currentPacmanIndex - 1] = 0;
					setScore(score + 50);
				}
				setCurrentPacmanIndex(currentPacmanIndex - 1);
			}
			if (currentPacmanIndex === 241) {
				setCurrentPacmanIndex(262 + 1);
			}
			break;
		case "ArrowRight":
			e.preventDefault();
			if (
				(currentPacmanIndex + 1) % 24 !== 0 &&
				currentPacmanIndex < 576 &&
				layout[currentPacmanIndex + 1] !== 1
			) {
				if (layout[currentPacmanIndex + 1] === 2) {
					layout[currentPacmanIndex + 1] = 0;
					setScore(score + 10);
				}
				if (layout[currentPacmanIndex + 1] === 4) {
					layout[currentPacmanIndex + 1] = 0;
					setScore(score + 50);
				}
				setCurrentPacmanIndex(currentPacmanIndex + 1);
			}
			if (currentPacmanIndex === 262) {
				setCurrentPacmanIndex(241 - 1);
			}
			break;
	}
};

export const moveBlinkyGhost = (
	currentBlinkyIndex: number,
	setCurrentBlinkyIndex: (arg: number) => void
) => {
	const blinky = document.querySelector(".blinky");
	const directions = [+1, -1, +24, -24];
	const newDirection =
		directions[Math.floor(Math.random() * directions.length)];
	setCurrentBlinkyIndex(currentBlinkyIndex + newDirection);
};

export const setItemClass = (
	item: number,
	i: number,
	currentPacmanIndex: number,
	currentBlinkyIndex: number,
	currentPinkyIndex: number,
	currentInkyIndex: number,
	currentClydeIndex: number
) => {
	if (i === currentPacmanIndex) {
		return "pac-man";
	}
	if (i === currentBlinkyIndex) {
		return "blinky ghost";
	}
	if (i === currentPinkyIndex) {
		return "pinky ghost";
	}
	if (i === currentInkyIndex) {
		return "inky ghost";
	}
	if (i === currentClydeIndex) {
		return "clyde ghost";
	}
	if (item === 0) {
		return "empty";
	}
	if (item === 1) {
		return "wall";
	}
	if (item === 2) {
		return "pac-dot";
	}
	if (item === 3) {
		return "ghost-lair";
	}
	if (item === 4) {
		return "power-pellet";
	}
};

export const layout = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1],
	[1, 1, 2, 4, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 4, 2, 1, 1],
	[1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1],
	[1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1, 1],
	[1, 1, 2, 2, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 3, 3, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[0, 0, 2, 2, 2, 2, 2, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 2, 2, 2, 2, 2, 0, 0],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 2, 1, 0, 1, 3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 1, 1, 1, 1, 1],
	[1, 1, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 1, 1],
	[1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 1],
	[1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1],
	[1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1],
	[1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1],
	[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1],
	[1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1],
	[1, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
].flat(1);

//0 - empty
//1 - wall
//2 - pac-dot
//3 - ghost-lair
//4 - power-pellet

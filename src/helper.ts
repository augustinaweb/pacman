export const movePacman = (
	e: any,
	currentPacmanIndex: number,
	setCurrentPacmanIndex: (arg: number) => void
) => {
	switch (e.key) {
		case "ArrowUp":
			e.preventDefault();
			if (currentPacmanIndex - 24 >= 0) {
				setCurrentPacmanIndex(currentPacmanIndex - 24);
			}
			break;
		case "ArrowDown":
			e.preventDefault();
			if (currentPacmanIndex + 24 < 576) {
				setCurrentPacmanIndex(currentPacmanIndex + 24);
			}
			break;
		case "ArrowLeft":
			e.preventDefault();
			if (currentPacmanIndex > 0 && currentPacmanIndex / 24 !== 1) {
				setCurrentPacmanIndex(currentPacmanIndex - 1);
			}
			break;
		case "ArrowRight":
			e.preventDefault();
			if (currentPacmanIndex < 576 && currentPacmanIndex / 23 !== 1) {
				setCurrentPacmanIndex(currentPacmanIndex + 1);
			}
			break;
	}
};

export const setItemClass = (item: number, i: number, currentIndex: number) => {
	if (i === currentIndex) {
		return "pac-man";
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
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
	2, 4, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 4, 2, 1, 1, 1, 1, 2,
	1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1,
	1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2,
	2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2,
	1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0,
	1, 1, 1, 3, 3, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1,
	3, 3, 3, 3, 3, 3, 1, 0, 1, 2, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 0, 1, 3,
	3, 3, 3, 3, 3, 1, 0, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 0, 1, 3, 3,
	3, 3, 3, 3, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 3, 3, 3,
	3, 3, 3, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1,
	1, 1, 1, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1,
	2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2,
	1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1,
	1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
	2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
	1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1,
	1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1,
	1, 2, 1, 1, 4, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
	4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];

//0 - empty
//1 - wall
//2 - pac-dot
//3 - ghost-lair
//4 - power-pellet

export const setItemClass = (item: number) => {
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

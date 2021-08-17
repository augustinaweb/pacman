import { layout } from "./helper";

export const moveGhost = (
	currentIndex: number,
	setCurrentIndex: (arg: number) => void,
	ghosts: number[]
) => {
	const directions = [+1, -1, +24, -24];
	const getNewDirection = (): number => {
		const direction =
			directions[Math.floor(Math.random() * directions.length)];
		if (
			layout[currentIndex + direction] === 1 ||
			ghosts.includes(currentIndex + direction)
		) {
			return getNewDirection();
		}
		return direction;
	};
	const newIndex = currentIndex + getNewDirection();
	setCurrentIndex(newIndex);
};

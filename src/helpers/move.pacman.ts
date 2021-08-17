import { layout } from "./helper";

export const movePacman = (
	e: KeyboardEvent,
	currentPacmanIndex: number,
	setCurrentPacmanIndex: (arg: number) => void,
	score: number,
	setScore: (arg: number) => void,
	setCurrentPacmanRotation: (arg: number) => void,
	setScaredGhosts: (arg: boolean) => void,
	gameOn: boolean
) => {
	const calculateStep = (direction: number, rotation: number) => {
		e.preventDefault();
		setCurrentPacmanRotation(rotation);
		return currentPacmanIndex + direction;
	};

	const food = (
		score: number,
		setScore: (arg: number) => void,
		nextStep: number
	) => {
		if (layout[nextStep] === 2) {
			layout[nextStep] = 0;
			setScore(score + 10);
		}
		if (layout[nextStep] === 4) {
			layout[nextStep] = 0;
			setScore(score + 50);
			setScaredGhosts(true);
			setTimeout(() => setScaredGhosts(false), 7000);
		}
	};

	if (gameOn) {
		switch (e.key) {
			case "ArrowUp":
				const nextStepUp = calculateStep(-24, 270);
				if (nextStepUp > 0 && layout[nextStepUp] !== 1) {
					food(score, setScore, nextStepUp);
					setCurrentPacmanIndex(nextStepUp);
				}
				break;
			case "ArrowDown":
				const nextStepDown = calculateStep(24, 90);
				if (nextStepDown < 576 && layout[nextStepDown] !== 1) {
					food(score, setScore, nextStepDown);
					setCurrentPacmanIndex(nextStepDown);
				}
				break;
			case "ArrowLeft":
				const nextStepLeft = calculateStep(-1, 180);
				if (
					currentPacmanIndex % 24 !== 0 &&
					currentPacmanIndex > 0 &&
					layout[nextStepLeft] !== 1
				) {
					food(score, setScore, nextStepLeft);
					setCurrentPacmanIndex(nextStepLeft);
				}
				if (currentPacmanIndex === 240) {
					setCurrentPacmanIndex(263);
				}
				break;
			case "ArrowRight":
				const nextStepRight = calculateStep(1, 0);
				if (
					nextStepRight % 24 !== 0 &&
					currentPacmanIndex < 576 &&
					layout[nextStepRight] !== 1
				) {
					food(score, setScore, nextStepRight);
					setCurrentPacmanIndex(nextStepRight);
				}
				if (currentPacmanIndex === 263) {
					setCurrentPacmanIndex(240);
				}
				break;
		}
	}
};

import React from "react";

interface PacmanProps {
	currentIndex: number;
	currentRotation: number;
}

export const Pacman: React.FC<PacmanProps> = ({
	currentIndex,
	currentRotation
}: PacmanProps) => {
	const top = Math.floor(currentIndex / 24) * 25;
	const left = (currentIndex % 24) * 25;
	return (
		<div
			className="pacman-container"
			//data-top={`${top}px`}
			//data-left={`${left}px`}
			style={{
				top: `${top}px`,
				left: `${left}px`,
				transform: `rotate(${currentRotation}deg)`,
				transition: `${
					currentIndex === 263 || currentIndex === 240
						? ``
						: `left 0.5s, top 0.5s`
				}`
			}}
		>
			<div className="pacman">
				<div className="pacman-mouth"></div>
			</div>
		</div>
	);
};

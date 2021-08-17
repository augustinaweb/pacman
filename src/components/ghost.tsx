import React from "react";

export enum GhostNames {
	pinky = "pinky",
	blinky = "blinky",
	inky = "inky",
	clyde = "clyde"
}

interface GhostProps {
	ghostName: GhostNames;
	currentGhostIndex: number;
	scared: boolean;
}

export const Ghost: React.FC<GhostProps> = ({
	ghostName,
	currentGhostIndex,
	scared
}: GhostProps) => {
	const top = Math.floor(currentGhostIndex / 24) * 25;
	const left = (currentGhostIndex % 24) * 25;
	return (
		<div
			className="ghost-container"
			style={{
				top: `${top}px`,
				left: `${left}px`,
				transition: "left 1s, top 1s",
				display: `${currentGhostIndex === -1 ? `none` : ``}`
			}}
		>
			<div className="ghost" data-name={ghostName} data-scared={scared}>
				<div className="ghost-eyes">
					<div className="ghost-eye" data-scared-eye={scared}>
						<div
							className="eye-pupil"
							style={{ display: `${scared ? `none` : ``}` }}
						></div>
					</div>
					<div className="ghost-eye" data-scared-eye={scared}>
						<div
							className="eye-pupil"
							style={{ display: `${scared ? `none` : ``}` }}
						></div>
					</div>
				</div>
				<div className="ghost-mouth" data-scared-mouth={scared}></div>
			</div>
		</div>
	);
};

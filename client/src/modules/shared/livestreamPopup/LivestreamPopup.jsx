import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Draggable from "react-draggable";

import "./livestreamPopup.css";

export const LivestreamPopup = ({ showPopup, setShowPopup }) => {
	const nodeRef = useRef(null); // Avoid findDOMNode

	if (!showPopup) return null;

	return (
		<Draggable handle=".handle" nodeRef={nodeRef}>
			<div ref={nodeRef} className="popup-container">
				<div className="handle cursor-move popup-handle">
					<button
						onClick={() => setShowPopup(false)}
						className="popup-close"
					>
						✖
					</button>
				</div>
				<div className="popup-video">
					<ReactPlayer
						url="https://www.youtube.com/watch?v=L1Ta38LNcUE"
						playing
						muted
						controls
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</Draggable>
	);
};

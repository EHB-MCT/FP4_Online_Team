import { NavLink } from "react-router";
import React from "react";
// import styled from 'styled-components';

const Button = ({ destinationUrl, copy, className, color, backgroundColor, hoverColor }) => {
	return (
		<NavLink
			to={destinationUrl}
			className={className}
			style={{
				"--button-font-color": color,
				"--button-color": backgroundColor,
				"--button-font-color-hover": hoverColor, // pass hoverColor as a prop
			}}
		>
			{" "}
			{copy}{" "}
		</NavLink>
	);
};

export default Button;

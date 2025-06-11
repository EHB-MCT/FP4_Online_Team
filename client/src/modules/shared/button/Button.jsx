import { NavLink } from "react-router";
import React from 'react';
// import styled from 'styled-components';

const Button = ({ destinationUrl, copy, className }) => {
	return (
	
			<NavLink to={destinationUrl} className={className}>
				{" "}
				{copy}{" "}
			</NavLink>
	
	);
};
	
export default Button;

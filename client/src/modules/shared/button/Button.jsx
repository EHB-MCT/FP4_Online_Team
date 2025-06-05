import { NavLink } from "react-router";
import React from 'react';
import styled from 'styled-components';

const Button = ({ destinationUrl, copy, className }) => {
	return (
	
			<NavLink to={destinationUrl} className={className}>
				{" "}
				{copy}{" "}
			</NavLink>
	
	);
};
// const StyledWrapper = styled.div`
// 	.button {
// 		position: relative;
// 		display: inline-block;
// 		margin: 15px;
// 		padding: 15px 30px;
// 		text-align: center;
// 		font-size: 18px;
// 		letter-spacing: 1px;
// 		text-decoration: none;
// 		color:rgb(255, 255, 255);
// 		background: #B4C435;
// 		cursor: pointer;
// 		transition: ease-out 0.5s;
// 		border: 2px solid #B4C435;
// 		border-radius: 10px;
// 		box-shadow: inset 0 0 0 0 #B4C435;
// 	}

// 	.button:hover {
// 		color: white;
//         background-color: transparent;
        
		
// 	}

// 	.button:active {
// 		transform: scale(0.9);
// 	}
// `;

export default Button;

import React from "react";
import Button from "../../../shared/button/Button";
const Buttons = () => {
	return (
		<div className="">
			<Button
				destinationUrl={"/register"}
				copy={"Inschrijven"}
				className={"button"}
			/>
		</div>
	);
};

export default Buttons;

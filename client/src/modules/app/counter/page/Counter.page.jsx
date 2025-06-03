import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Counter.css";
export const Counter = () => {
	const [count, setCount] = useState(null);

	useEffect(() => {
		const fetchCount = async () => {
			try {
				const res = await axios.get("https://api.shiftfestival.be/api/counter");
				setCount(res.data.count);
			} catch (error) {
				console.error("Error fetching count:", error);
			}
		};
		fetchCount();
	}, []);

	return (
		<section className="inner-wrapper">
			<div className="wrapper">
				<h1 className="text ">
					Totale inschrijvingen <br /> {count}
				</h1>
			</div>
		</section>
	);
};

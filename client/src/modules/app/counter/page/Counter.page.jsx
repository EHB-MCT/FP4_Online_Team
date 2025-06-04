import { useState, useEffect } from "react";
import "./Counter.css";

export const Counter = () => {
	const [count, setCount] = useState(null);

	useEffect(() => {
		const eventSource = new EventSource("http://localhost:3000/api/attendee-stream");

		eventSource.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);
				if (typeof data.count !== "undefined") {
					setCount(data.count);
				}
			} catch (err) {
				console.error("Failed to parse SSE data:", err);
			}
		};

		eventSource.onerror = (err) => {
			console.error("SSE connection error:", err);
			eventSource.close();
		};

		return () => {
			eventSource.close();
		};
	}, []);

	return (
		<section
			className="inner-wrapper"
			style={{
				minHeight: "85dvh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div className="wrapper">
				<h1 className="green-text">
					Totale inschrijvingen <br /> {count !== null ? count : "Laden..."}
				</h1>
			</div>
		</section>
	);
};
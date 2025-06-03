export const CategorySelector = ({ selected, onSelect }) => {
	const categories = [
		"App / Web",
		"Game / AR / VR",
		"Installatie / Prototyping",
		"Motion graphics",
	];

	return (
		<div style={styles.wrapper}>
			{categories.map((cat, i) => (
				<button
					key={i}
					style={{
						...styles.button,
						backgroundColor: selected === cat ? "#ccc" : "#f9f9f9",
						fontWeight: selected === cat ? "bold" : "normal",
					}}
					onClick={() => onSelect(cat)}
				>
					{cat}
				</button>
			))}
		</div>
	);
};

const styles = {
	wrapper: {
		display: "flex",
		justifyContent: "center",
		gap: "12px",
		marginTop: "90px",
		flexWrap: "wrap",
	},

	button: {
		padding: "8px 16px",
		border: "1px solid #999",
		borderRadius: "4px",
		cursor: "pointer",
		backgroundColor: "#f9f9f9",
		fontSize: "14px",
		transition: "all 0.2s ease-in-out",
	},
};

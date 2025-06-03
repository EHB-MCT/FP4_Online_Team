export const ProjectCard = ({ projectName, name }) => {
	return (
		<div style={styles.card}>
			<div style={styles.image}></div>
			<div style={styles.textBox}>
				<p style={styles.projectName}>
					<strong>{projectName}</strong>
				</p>
				<p style={styles.name}>{name}</p>
			</div>
		</div>
	);
};

const styles = {
	card: {
		width: "200px",
		border: "1px solid #000",
		backgroundColor: "#fff",
		margin: "10px",
		display: "flex",
		flexDirection: "column",
	},

	image: {
		position: "relative",
		width: "100%",
		height: "200px",
		backgroundColor: "#f2f2f2",
		borderBottom: "1px solid #000",
	},

	textBox: {
		textAlign: "center",
		padding: "10px",
		borderTop: "1px solid #000",
	},

	projectName: {
		margin: 0,
		fontSize: "14px",
	},

	name: {
		margin: 0,
		fontSize: "12px",
		color: "#555",
	},
};

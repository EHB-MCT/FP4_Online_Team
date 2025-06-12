import Carousel from "../components/Carousel";
import Button from "../../../shared/button/Button";
import { NavLink } from "react-router";

export const HomeTwo = () => {
	document.title = "Home | Shift Expo";

	return (
		<section className="inner-wrapper">
			<div className="wrapper">
				<div style={styles.wrapper}>
					<div style={styles.banner}>
						<h1>Welkom op de Shift expo</h1>
						<p>
							Ontdek creatieve eindprojecten van onze afstuderende studenten en
							krijg een blik achter de schermen van onze opleiding.
						</p>
					</div>
				</div>

				<div style={styles.container}>
					<h2>Eindjaarprojecten</h2>

					<div style={styles.carouselWrapper}>
						<Carousel />
					</div>

					<Button
						destinationUrl={"/Projecten"}
						copy={"Ontdek meer eindjaarprojecten"}
						className={"button"}
					/>

					<div style={styles.livestreamBoxWrapper}>
						<NavLink to="/Livestream" style={styles.livestreamBox}>
							Bekijk hier onze livestream!
						</NavLink>
					</div>
				</div>

				<div style={styles.container}>
					<h2>Programma</h2>

					<div style={styles.imagePlaceholder}></div>

					<p>Bekijk het volledige programma en de tijdstabel.</p>

					<Button
						destinationUrl={"/Programma"}
						copy={"Programma"}
						className={"button"}
					/>
				</div>

				<div style={styles.container}>
					<h2>Extra info</h2>

					<p>
						Benieuwd naar onze opleiding ?
						<br />
						Leer websites, apps, games, video en VR maken.
						<br />
						Infodag: Vrijdag 20 juni, 17u – 22u
					</p>

					<a
						href="https://www.erasmushogeschool.be/nl/opleidingen/multimedia-en-creatieve-technologie"
						target="_blank"
						rel="noopener noreferrer"
						style={styles.link}
					>
						Meer over de opleiding
					</a>
				</div>
			</div>
		</section>
	);
};

const styles = {
	container: {
		textAlign: "center",
		marginBottom: "60px",
	},

	imagePlaceholder: {
		width: "100%",
		maxWidth: "600px",
		height: "200px",
		backgroundColor: "#eee",
		margin: "0 auto 20px",
		border: "1px solid",
		borderRadius: "6px",
	},

	link: {
		textDecoration: "underline",
		fontWeight: "bold",
	},

	livestreamBox: {
		border: "1px solid #000",
		padding: "10px 15px",
		borderRadius: "4px",
		backgroundColor: "#fff",
		width: "fit-content",
	},

	livestreamBoxWrapper: {
		display: "flex",
		justifyContent: "flex-start",
		marginTop: "20px",
	},

	wrapper: {
		textAlign: "center",
		marginBottom: "60px",
	},

	banner: {
		width: "100%",
		height: "250px",
		backgroundColor: "#e0e0e0",
		marginBottom: "30px",
	},
};

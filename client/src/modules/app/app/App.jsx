import { Outlet } from "react-router";

//Components
import { Navigation } from "../../shared/navigation/Navigation";
import { Footer } from "../../shared/footer/Footer";
import { NavigationFase2 } from "../../shared/navigation/NavigationFase2";

//CSS
import "./App.css";

function App() {
	return (
		<>

			<NavigationFase2 />
			{/* <Navigation /> */}
			<Outlet />
			<Footer />
		</>
	);
}

export default App;

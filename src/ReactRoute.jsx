import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import NavbarUtils from "./Component/NavbarUtils";
import Navbar from "./Component/Navbar";
import HomePopular from "./Component/HomePopular";

const ReactRoute = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route
						path="/home"
						element={
							<>
								<NavbarUtils />
								<Navbar />
								<HomePopular />
							</>
						}
					/>
					<Route
						path="/popular"
						element={
							<>
								<NavbarUtils />
								<Navbar />
							</>
						}
					/>
					<Route
						path="/manga"
						element={
							<>
								<NavbarUtils />
								<Navbar />
							</>
						}
					/>
					<Route
						path="/manhwa"
						element={
							<>
								<NavbarUtils />
								<Navbar />
							</>
						}
					/>
					<Route
						path="/manhua"
						element={
							<>
								<NavbarUtils />
								<Navbar />
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};
export default ReactRoute;

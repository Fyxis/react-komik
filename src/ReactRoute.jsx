import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import NavbarMerge from "./Component/NavbarMerge";
import HomePopular from "./Component/HomePopular";
import "./assets/design/style.css";

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
								<NavbarMerge />
								<HomePopular />
							</>
						}
					/>
					<Route
						path="/popular"
						element={
							<>
								<NavbarMerge />
							</>
						}
					/>
					<Route
						path="/manga"
						element={
							<>
								<NavbarMerge />
							</>
						}
					/>
					<Route
						path="/manhwa"
						element={
							<>
								<NavbarMerge />
							</>
						}
					/>
					<Route
						path="/manhua"
						element={
							<>
								<NavbarMerge />
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};
export default ReactRoute;

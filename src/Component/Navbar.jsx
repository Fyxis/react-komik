import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/design/style.css";
const Navbar = () => {
	const location = useLocation();
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		const path = location.pathname;
		setActiveLink(path);
	}, [location]);

	return (
		<>
			<nav className="navbar">
				<ul className="navbar-menu">
					<li>
						<Link
							to="/home"
							className={activeLink === "/home" ? "navlink active" : "navlink"}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/popular"
							className={activeLink === "/popular" ? "navlink active" : "navlink"}
						>
							Popular
						</Link>
					</li>
					<li>
						<Link
							to="/manga"
							className={activeLink === "/manga" ? "navlink active" : "navlink"}
						>
							Manga
						</Link>
					</li>
					<li>
						<Link
							to="/manhwa"
							className={activeLink === "/manhwa" ? "navlink active" : "navlink"}
						>
							Manhwa
						</Link>
					</li>
					<li>
						<Link
							to="/manhua"
							className={activeLink === "/manhua" ? "navlink active" : "navlink"}
						>
							Manhua
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
export default Navbar;

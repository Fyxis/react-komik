import Assets from "./AssetsComponent";
import "../assets/design/style.css";
const NavbarUtils = () => {
	return (
		<nav className="navbar-utils">
			<div className="logo">
				<img
					src={Assets.logo}
					alt="Komikcast - Baca Komik Online Bahasa Indonesia"
					className="logo"
				/>
			</div>
			<div className="search-bar">
				<input type="text" placeholder="Search..." />
				<button type="submit">Search</button>
			</div>
		</nav>
	);
};
export default NavbarUtils;

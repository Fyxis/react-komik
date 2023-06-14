import RecentUpload from "./RecentUpload";
import Popular from "./Popular";
import "../assets/design/style.css";
const HomePopular = () => {
	return (
		<>
			<div className="wrapper">
                <RecentUpload />
                <Popular />
			</div>
		</>
	);
};
export default HomePopular;

import RecentUpload from "./RecentUpload";
import Popular from "./Popular";

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

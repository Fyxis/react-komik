import Assets from "./AssetsComponent";

const RecentUpload = () => {
	return (
		<>
			<div className="container-card">
				<div className="title">
					<h1 className="title-recent">Recent Upload</h1>
					<hr />
				</div>
				<div className="all-card">
					<div className="card">
						<img src={Assets.testing} className="card-image" />
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
					<div className="card">
						<img src={Assets.testing} className="card-image" />
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
					<div className="card">
						<img src={Assets.testing} className="card-image" />
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
					<div className="card">
						<img src={Assets.testing} className="card-image" />
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
					<div className="card">
						<img src={Assets.testing} className="card-image" />
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
					<div className="card">
						<img src={Assets.testing} className="card-image" />
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
					<div className="card">
						<img
							src="https://komikcast.site/wp-content/uploads/2021/10/rcm1235461353513-e1634824916381.jpg"
							className="card-image"
						/>
						<h1 className="card-title">Magic Emperor</h1>
						<h4 className="card-description">Chapter 14</h4>
						<h4 className="card-views">200k+</h4>
					</div>
				</div>
			</div>
		</>
	);
};
export default RecentUpload;

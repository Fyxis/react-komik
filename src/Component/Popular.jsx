import Assets from "./AssetsComponent";

const Popular = () => {
	return (
		<>
			<div className="popular">
				<div className="title">
					<h1 className="title-popular">Popular by Ranking</h1>
					<hr />
				</div>
				<div className="all-popular">
					<div className="popular-card">
						<img src={Assets.testing} className="popular-image" />
						<div className="text-popular">
							<div className="with-ranking">
								<div className="split">
									<div className="popular-title">Magic Emperor</div>
									<div className="popular-chapter">Chapter 206</div>
								</div>
								<div className="popular-nomor">#1</div>
							</div>
							<div className="popular-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reiciendis natus fugiat illo praesentium animi atque neque quae?
								Modi reprehenderit provident dolore voluptatum.
							</div>
							<div className="popular-views">679k+</div>
							<div className="popular-rating">Rating : 4,2/5</div>
						</div>
					</div>
					<div className="popular-card">
						<img src={Assets.testing} className="popular-image" />
						<div className="text-popular">
							<div className="with-ranking">
								<div className="split">
									<div className="popular-title">Magic Emperor</div>
									<div className="popular-chapter">Chapter 206</div>
								</div>
								<div className="popular-nomor">#2</div>
							</div>
							<div className="popular-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reiciendis natus fugiat illo praesentium animi atque neque quae?
								Modi reprehenderit provident dolore voluptatum.
							</div>
							<div className="popular-views">679k+</div>
							<div className="popular-rating">Rating : 4,2/5</div>
						</div>
					</div>
					<div className="popular-card">
						<img src={Assets.testing} className="popular-image" />
						<div className="text-popular">
							<div className="with-ranking">
								<div className="split">
									<div className="popular-title">Magic Emperor</div>
									<div className="popular-chapter">Chapter 206</div>
								</div>
								<div className="popular-nomor">#3</div>
							</div>
							<div className="popular-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reiciendis natus fugiat illo praesentium animi atque neque quae?
								Modi reprehenderit provident dolore voluptatum.
							</div>
							<div className="popular-views">679k+</div>
							<div className="popular-rating">Rating : 4,2/5</div>
						</div>
					</div>
					<div className="popular-card">
						<img src={Assets.testing} className="popular-image" />
						<div className="text-popular">
							<div className="with-ranking">
								<div className="split">
									<div className="popular-title">Magic Emperor</div>
									<div className="popular-chapter">Chapter 206</div>
								</div>
								<div className="popular-nomor">#4</div>
							</div>
							<div className="popular-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reiciendis natus fugiat illo praesentium animi atque neque quae?
								Modi reprehenderit provident dolore voluptatum.
							</div>
							<div className="popular-views">679k+</div>
							<div className="popular-rating">Rating : 4,2/5</div>
						</div>
					</div>
					<div className="popular-card">
						<img src={Assets.testing} className="popular-image" />
						<div className="text-popular">
							<div className="with-ranking">
								<div className="split">
									<div className="popular-title">Magic Emperor</div>
									<div className="popular-chapter">Chapter 206</div>
								</div>
								<div className="popular-nomor">#5</div>
							</div>
							<div className="popular-description">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reiciendis natus fugiat illo praesentium animi atque neque quae?
								Modi reprehenderit provident dolore voluptatum.
							</div>
							<div className="popular-views">679k+</div>
							<div className="popular-rating">Rating : 4,2/5</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Popular;

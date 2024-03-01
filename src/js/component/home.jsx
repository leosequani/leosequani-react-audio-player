import React from "react";
import Listofsongs from "./ListOfSongs";


//create your first component
const Home = () => {
	return (
		<div>
			<div className="container-fluid">
				<div className="row p-5">
					<div className="col">
						<Listofsongs />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

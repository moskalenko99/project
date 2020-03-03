import React from 'react';
import {
	Link
	} from "react-router-dom";

class Navigation extends React.Component {

	render(){
		return (
			<nav className="Navigation">
			<div className="header__bottom">
				<div className="menu-item">
					<Link to="/cat">
						<img src="image/cat-icon.png" alt="cat" />
					</Link>
				</div>
				<div className="menu-item">
					<Link to="/dog">
						<img src="image/dog-icon.png" alt="dog" />
					</Link>
				</div>
				<div className="menu-item">
					<Link to="/mouse">
						<img src="image/mouse-icon.png" alt="mouse" />
					</Link>
				</div>
				<div className="menu-item">
					<Link to="/fish">
						<img src="image/fish-icon.png" alt="fish" />
					</Link>
				</div>
				<div className="menu-item">
					<Link to="/chicken">
						<img src="image/chicken-icon.png" alt="bird" />
					</Link>
				</div>
				<div className="menu-item">
					<Link to="/pig">
						<img src="image/pig-icon.png" alt="farm_animal" />
					</Link>
				</div>
			</div>
		</nav>
		);
	}
}

export default Navigation;

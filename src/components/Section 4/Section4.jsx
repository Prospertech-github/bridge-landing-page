import React from 'react';
import Image from '../../assets/Rectangle 5.png';
import Ellipse from '../../assets/Ellipse 2.png';
import './Section4.css';

const Section4 = () => {
	return (
		<div className="main__header">
			<div class="main__header-container">
				<div className="ellipse-div">
					<img className="ellipse-img" src={Ellipse} alt="ellipse" />
				</div>
				<div class="main__header-left">
					<img src={Image} alt="image" />
				</div>

				<div class="main__header-right">
					<h3>
						<span>Managing</span> your business conviniently from
						anywhere
					</h3>
					<p>
						We are working round the clock to make sure we serve you
						with the best possible experience. Become part of Bridge
						today!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section4;

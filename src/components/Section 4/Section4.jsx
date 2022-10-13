import React from 'react';
import Image from '../../assets/Rectangle 5.png';
import Ellipse from '../../assets/Ellipse 2.png';
import './Section4.css';

const Section4 = () => {
	return (
		<div className="main__header-section4">
			<div class="main__header-container">
				<div className="ellipse-div">
					<img className="ellipse-img" src={Ellipse} alt="ellipse" />
				</div>
				<div class="main__header-left">
					<img src={Image} alt="Do It with ease" />
				</div>

				<div class="main__header-right">
					<h3>
						Make <span>technology</span> work for your business
					</h3>
					<p>
						Simple, innovative tools to help you run your business
						conveniently from anywhere.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Section4;

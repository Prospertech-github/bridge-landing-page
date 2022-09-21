import React from 'react';
import Iphone1 from '../../assets/Devices/Apple/iPhone 12 _ 12 Pro (2).png';
import Iphone2 from '../../assets/Devices/Apple/iPhone 12 _ 12 Pro (3).png';
import Iphone3 from '../../assets/Devices/Apple/iPhone 12 _ 12 Pro.png';
import './Headerimg.css';

const Headerimg = () => {
	return (
		<div className="container img__header">
			<div className="first__img">
				<img src={Iphone1} alt="iphone 1" />
				<img src={Iphone2} alt="iphone 2" />
				<div class="second__img">
					<img src={Iphone3} alt="iphone 3" />
				</div>
			</div>
		</div>
	);
};

export default Headerimg;

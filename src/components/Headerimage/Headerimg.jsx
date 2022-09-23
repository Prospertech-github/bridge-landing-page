import React from 'react';
import PhoneImage from '../../assets/phones.png';
import './Headerimg.css';

const Headerimg = () => {
	return (
		<div className="container img__header">
			<div className="first__img">
				<img src={PhoneImage} alt="Phone Showing The Bridge App" />
			</div>
		</div>
	);
};

export default Headerimg;

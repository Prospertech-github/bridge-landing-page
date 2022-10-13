import React from 'react';
import { FiMail } from 'react-icons/fi';
import './Mainheader2.css';

const Mainheader2 = () => {
	return (
		<div>
			<div className=" container main__head">
				<div className="head-writeup1">
					<h3>
						Be the first on the <span>Bridge</span>
					</h3>
				</div>
				<div className="head-writeup2">
					<p>
						Stay updated on everything as we build this game
						changing solution.
					</p>
				</div>

				<div className="input__form">
					<div className="input__div">
						<i className="icon1">
							<FiMail />
						</i>
						<input
							className="input__field"
							type="text"
							placeholder="Enter your email address"
							focus
						/>
					</div>
					<button className="sub-button" type="submit">
						Join Our Waitlist
					</button>
				</div>
			</div>
		</div>
	);
};

export default Mainheader2;

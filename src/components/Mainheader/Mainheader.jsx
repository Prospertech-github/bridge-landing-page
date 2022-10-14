import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Mainheader.css';

const Mainheader = () => {
	return (
		<>
			<Navbar />
			<header>
				<div className=" container main__header">
					<div className="header-writeup1">
						<h3>
							Do <span>Business</span> the way you imagined
						</h3>
					</div>
					<div className="header-writeup2">
						<p>
							Send invoices, process payments, control your
							inventory and more, all on one platform.
						</p>
					</div>
				</div>
			</header>
		</>
	);
};

export default Mainheader;

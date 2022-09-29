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
							Your Mobile <span>Business App</span>{' '}
						</h3>
					</div>
					<div className="header-writeup2">
						<p>
							Take full control of your business with robust
							inventory, accounting, invoicing and customer
							management
						</p>
					</div>
				</div>
			</header>
		</>
	);
};

export default Mainheader;

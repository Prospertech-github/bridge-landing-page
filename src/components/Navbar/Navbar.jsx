import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data/data';
import Logo from '../../assets/Group 6.png';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	return (
		<nav>
			<div className="nav__container">
				<Link
					to="/"
					className="logo"
					onClick={() => isNavShowing(false)}
				>
					<img src={Logo} alt="logo" />
				</Link>
				<ul
					className={`nav__links ${
						isNavShowing ? 'show__nav' : 'hide__nav'
					}`}
				>
					{links.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink
									to={path}
									className={({ isActive }) =>
										isActive ? 'active-nav' : ''
									}
									onClick={() =>
										setIsNavShowing(prev => !prev)
									}
								>
									{name}
								</NavLink>
							</li>
						);
					})}
				</ul>
				<button
					class="nav__toggle-btn"
					onClick={() => setIsNavShowing(prev => !prev)}
				>
					{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
				</button>
				{/* <ul className='nav__links'>
          <li><a href='#about'>About</a></li>
          <li><a href='#blog'>Blog</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <button className="nav__toggle-btn"><GoThreeBars/></button> */}
			</div>
		</nav>
	);
};

export default Navbar;

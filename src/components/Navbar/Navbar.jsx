import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../../data/data';
import Logo from '../../assets/bridgeLogo.png';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	const navLinks = document.querySelector('.navLinks');
	const slideUp = () => {
		navLinks.style.top = '-100%';
	}
	const scrollFunction = (e) => {
		if (e.target.id === "About") {
			if (isNavShowing) slideUp();
			document.querySelector('#about').scrollIntoView();

		}
		
		if (e.target.id === "Contact") {
			if(isNavShowing) slideUp();
			document.querySelector('#contact').scrollIntoView();
		}

	}
	const showMenu = (e) => {
		console.log('fresh');
		console.log(e)
		navLinks.style.display = 'flex'
		navLinks.style.top = '0';
		console.log(isNavShowing)

		setIsNavShowing(true);
	}
	const closeMenu = () => {
		console.log(isNavShowing);

		slideUp();
			

		// if (isNavShowing) {
		// 	navLinks.style.top = '-100%';
		// } else {
		// 	return
		// }

		// isNavShowing ? (navLinks.style.top = '-100%') : '';
	};

	return (
		// <nav>
		// 	<div className="nav__container">
		// 		<Link
		// 			to="/"
		// 			className="logo"
		// 			onClick={() => isNavShowing(false)}
		// 		>
		// 			<img src={Logo} alt="logo" />
		// 		</Link>
		// 		<ul
		// 			className={`nav__links ${
		// 				isNavShowing ? 'show__nav' : 'hide__nav'
		// 			}`}
		// 		>
		// 			{links.map(({ name, path }, index) => {
		// 				return (
		// 						<button onClick={scrollFunction}>
		// 							Scroll Button
		// 						</button>
		// 					<li key={index}>
		// 						<NavLink
		// 							to={path}
		// 							className={({ isActive }) =>
		// 								isActive ? 'active-nav' : ''
		// 							}
		// 							onClick={() => {
		// 								setIsNavShowing(prev => !prev);
		// 								scrollFunction()
		// 							}
		// 							}
		// 						>
		// 							{name}
		// 						</NavLink>
		// 					</li>
		// 				);
		// 			})}
		// 		</ul>
		// 		<button
		// 			class="nav__toggle-btn"
		// 			onClick={() => setIsNavShowing(prev => !prev)}
		// 		>
		// 			{isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
		// 		</button>
		// 		{/* <ul className='nav__links'>
		//       <li><a href='#about'>About</a></li>
		//       <li><a href='#blog'>Blog</a></li>
		//       <li><a href='#contact'>Contact</a></li>
		//     </ul>
		//     <button className="nav__toggle-btn"><GoThreeBars/></button> */}
		// 	</div>
		// </nav>

		<nav>
			<div className="logo">
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
			</div>
			<div className="openMenu">
				<GoThreeBars onClick={showMenu}/>
			</div>

			<ul className="navLinks">
				{links.map(({ name, path }, index) => {
					return (
						<li key={index}>
							<button className="links" onClick={scrollFunction} id={name}>{name}</button>
						</li>
					);
				})}
				<div className="closeMenu">
					<MdOutlineClose onClick={closeMenu}/>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;

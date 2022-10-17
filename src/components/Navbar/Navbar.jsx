import React from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { links } from '../../data/data';
import Logo from '../../assets/newLogo.png';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
	const [isNavShowing, setIsNavShowing] = useState(false);
	const [isActve, setIsActive] = useState(false);

	document.addEventListener('scroll', e => {
		if (window.scrollY > 150) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	});

	const slideUp = () => {
		const navLinks = document.querySelector('.navLinks');
		navLinks.style.left = '-100%';
	}

	const scrollFunction = (e) => {
		if (e.target.id === "About") {
			if (isNavShowing) slideUp();
			document.querySelector('#about').scrollIntoView({behavior: "smooth", block:"center"});

		}
		
		if (e.target.id === "Join Waitlist") {
			if(isNavShowing) slideUp();
			document
				.querySelector('#waitlist')
				.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}

	}
	const showMenu = (e) => {
		const navLinks = document.querySelector('.navLinks');
		navLinks.style.display = 'flex'
		navLinks.style.top = '0';
		navLinks.style.transform = 'translateX(0px)';
		navLinks.style.left = '0';
		navLinks.style.width = '100%';

		console.log(isNavShowing)

		setIsNavShowing(true);
	}

	const closeMenu = () => {
		console.log(isNavShowing);
		slideUp();
	};

	return (
		<nav className={`${isActve ? 'scrolled' : ''}`}>
			<div className="logo">
				<Link to="/">
					<img src={Logo} alt="logo" />
				</Link>
			</div>
			<div className="openMenu">
				<GoThreeBars onClick={showMenu} />
			</div>

			<ul className="navLinks">
				{links.map(({ name, path }, index) => {
					return (
						<li key={index}>
							<button
								className="links"
								onClick={scrollFunction}
								id={name}
							>
								{name}
							</button>
						</li>
					);
				})}
				<div className="closeMenu">
					<MdOutlineClose onClick={closeMenu} />
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;



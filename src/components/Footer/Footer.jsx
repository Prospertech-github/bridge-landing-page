import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {FaLinkedinIn} from 'react-icons/fa';
import './Footer.css';
import Logo from '../../assets/bridgeLogoWhite.png'

const Footer = () => {
  return (
		<footer>
			<div class="footer__socials">
				<a href="https://www.facebook.com">
					<FaFacebookF className="footer-icon" /> 
				</a>
				<a href="https://instagram.com">
					<FiInstagram className="footer-icon" />
				</a>
				<a href="https://twitter.com">
					<IoLogoTwitter className="footer-icon" />
				</a>
				<a href="https://twitter.com">
					<FaLinkedinIn className="footer-icon" />
				</a>
			</div>

			<a href="#" className="footer__logo">
				<img src={Logo} />
			</a>

			<div class="footer__copyright">
				<small>&copy; 2022 Get Bridge. All rights reserved</small>
			</div>
		</footer>
  );
}

export default Footer
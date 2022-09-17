import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {FaLinkedinIn} from 'react-icons/fa';
import './Footer.css';
import Logo from '../../assets/Group 24.png'

const Footer = () => {
  return (
    <footer>

<div class="footer__socials">
  <a href='https://www.facebook.com'>
  <FaFacebookF/>
  </a>
  <a href='https://instagram.com'>
    <FiInstagram/>
  </a>
  <a href='https://twitter.com'>
    <IoLogoTwitter/>
  </a>
  <a href='https://twitter.com'>
    <FaLinkedinIn/>
  </a>
</div>

  <a href='#' className='footer__logo'>
  <img src={Logo}/>
</a>

<div class="footer__copyright">
  <small>&copy; 2022 Get Bridge. All rights reserved</small>
</div>








  </footer>
  )
}

export default Footer
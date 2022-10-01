import React from 'react';
import './Section5.css';

const Section5 = () => {
  return (
		<div className=" container main__head-section5" id='contact'>
			<div className="heading-writeup1">
				<h3>
					Your<span> thoughts</span> matter to us
				</h3>
			</div>
			<div className="heading-writeup2">
				<p>
					Click <a href="#">here</a> to let us know what you'll love
					to see on our product
				</p>
			</div>

			<div class="contact-container">
				<form>
					<input
						type="text"
						name="name"
						placeholder="Enter your full name"
						required
						focus
					/>
					<input
						type="email"
						name="name"
						placeholder="Enter your email"
						required
					/>
					<textarea
						name="message"
						rows="5"
						placeholder="Your message to us(optional)"
						required
					></textarea>
					<button type="submit" className="btn btn-primary button">
						Submit
					</button>
				</form>
			</div>
		</div>
  );
}

export default Section5
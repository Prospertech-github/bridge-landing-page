import React from 'react';
import { BsClipboardCheck } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { RiCustomerService2Line } from 'react-icons/ri';
import { GiNotebook } from 'react-icons/gi';


import './Article.css';

const Article = () => {
	return (
		<div className="container article__container" id="about">
			<div className="services-container">
				<article className="services">
					<div class="article__left">
						{<BsClipboardCheck className="user" />}
					</div>
					<div class="article__right">
						<h3> Inventory</h3>
						<p> Never lose track of stock anytime </p>
					</div>
				</article>

				<article className="services">
					<div class="article__left sheet-icon">
						{<CgFileDocument className="docs" />}
					</div>
					<div class="article__right">
						<h3 class="blue-text"> Invoicing</h3>
						<p>Send bills and process payments faster</p>
					</div>
				</article>

				<article className="services">
					<div class="article__left bookkeeping-icon">
						{<GiNotebook className="docs" />}
					</div>
					<div class="article__right">
						<h3 class="purple-text"> Book-Keeping </h3>
						<p>Every transaction recorded for valuable insights.</p>
					</div>
				</article>

				<article className="services">
					<div class="article__left call-icon">
						{<RiCustomerService2Line className="clip" />}
					</div>
					<div class="article__right">
						<h3 className="red-text">Customer Management</h3>
						<p>Respond to customers needs in an instant</p>
					</div>
				</article>
			</div>
		</div>
	);
};

export default Article;

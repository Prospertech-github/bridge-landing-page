import React from 'react';
import { BsClipboardCheck } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { RiCustomerService2Line } from 'react-icons/ri';

import './Article.css';

const Article = () => {
	return (
		<div className="container article__container" id='about'>
			<div className="services-container">

			<article className="services">
				<div class="article__left">
					{<BsClipboardCheck className="user" />}
				</div>
				<div class="article__right">
					<h3> Inventory</h3>
					<p>Live records of every product, everytime.</p>
				</div>
			</article>

			<article className="services">
				<div class="article__left sheet-icon">
					{<GrDocumentText className="docs" />}
				</div>
				<div class="article__right">
					<h3 class="blue-text"> Invoicing</h3>
					<p>Bill customers and collect payments faster.</p>
				</div>
			</article>

			<article className="services">
				<div class="article__left sheet-icon">
					{<GrDocumentText className="docs" />}
				</div>
				<div class="article__right">
					<h3 class="blue-text"> Book-Keeping </h3>
					<p>Every sale recorded for valuable insights.</p>
				</div>
			</article>

			<article className="services">
				<div class="article__left call-icon">
					{<RiCustomerService2Line className="clip" />}
				</div>
				<div class="article__right">
					<h3>Customer Management</h3>
					<p>Vital information when you need it.</p>
				</div>
			</article>
			</div>
		</div>
	);
};

export default Article;

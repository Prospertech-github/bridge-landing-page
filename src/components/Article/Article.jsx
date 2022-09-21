import React from 'react';
import { BsClipboardCheck } from 'react-icons/bs';
import { GrDocumentText } from 'react-icons/gr';
import { RiCustomerService2Line } from 'react-icons/ri';

import './Article.css';

const Article = () => {
	return (
		<div className="container article__container">
			<article className="services">
				<div class="article__left">
					{<BsClipboardCheck className="user" />}
				</div>
				<div class="article__right">
					<h3>Easy Inventory</h3>
					<p>
						We are working round
						<br /> the
					</p>
				</div>
			</article>

			<article className="services">
				<div class="article__left sheet-icon">
					{<GrDocumentText className="docs" />}
				</div>
				<div class="article__right">
					<h3 class="blue-text">Easy Invoicing</h3>
					<p>
						We are working round
						<br /> the
					</p>
				</div>
			</article>

			<article className="services">
				<div class="article__left call-icon">
					{<RiCustomerService2Line className="clip" />}
				</div>
				<div class="article__right">
					<h3>Customer Management</h3>
					<p>
						We are working round
						<br /> the
					</p>
				</div>
			</article>
		</div>
	);
};

export default Article;

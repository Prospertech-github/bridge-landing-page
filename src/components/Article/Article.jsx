import React from 'react';
import {BsClipboardCheck} from 'react-icons/bs';
import {GrDocumentText} from 'react-icons/gr';
import {RiCustomerService2Line} from 'react-icons/ri'

import './Article.css';

const Article = () => {
  return (
    <div className="container article__container">
      <article className="services">
        <div class="article__left">
        {<BsClipboardCheck className="user"/>}
        </div>
        <div class="article__right">
          <h3>Easy Inventory</h3>
          <p>We are working round<br/> the</p>
        </div>
      </article>

      <article className="services2">
        <div class="article__left2">
           {<GrDocumentText className="docs"/>}
        </div>
        <div class="article__right2">
          <h3>Easy Inventory</h3>
          <p>We are working round<br/> the</p>
        </div>
      </article>

      <article className="services3">
        <div class="article__left3">
        {<RiCustomerService2Line className='clip'/>}

        </div>
        <div class="article__right3">
        <h3>Easy Inventory</h3>
          <p>We are working round<br/> the</p>
        </div>
      </article>
    </div>
  )
}

export default Article
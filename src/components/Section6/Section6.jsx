import React from "react";
import Blog1 from "../../assets/Rectangle.png";
import Blog2 from "../../assets/Rectangle (1).png";
import Blog3 from "../../assets/Rectangle (2).png";
import BlogFooter from "../../assets/Ellipse.png";
import "./Section6.css";

const Section6 = () => {
  return (
    <div className=" container main__head-section6">
      <div className="H-writeup2">
        <p>The Bridge Blog</p>
      </div>
      <div className="H-writeup1">
        <h3>What we have been up to</h3>
      </div>

      <section className="blog">
      {/* <div className="contianer__blog"> */}
        <article class="container-blog">
          <div class="blog-image">
            <img src={Blog1} alt="blog1" />
          </div>
          <div className="blog-body">
            <h5 className="blog-title">
              10 Secret Tips For Managing A<br /> Remote Team
            </h5>
            <br />
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              at libero, sequi debitis voluptatum quo explicabo magnam quasi
              eveniet nam?
            </small>
            <br />
            <br />
            <div className="blog-footer">
              <div className="blog-foot-left">
                <img src={BlogFooter} alt="blog-foot" />
              </div>
              <div className="blog-foot-center">
                <small>Abdul Okadigbo</small>
              </div>
              <div className="blog-foot-right">
                <small>12 August 2022</small>
              </div>
            </div>
          </div>
        </article>

        <article class=" container-blog2">
          <div class="blog-image">
            <img src={Blog2} alt="blog1" />
          </div>
          <div className="blog-body">
            <h5 className="blog-title">
              10 Secret Tips For Managing A<br /> Remote Team
            </h5>
            <br />
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              at libero, sequi debitis voluptatum quo explicabo magnam quasi
              eveniet nam?
            </small>
            <br />
            <br />
            <div className="blog-footer">
              <div className="blog-foot-left">
                <img src={BlogFooter} alt="blog-foot" />
              </div>
              <div className="blog-foot-center">
                <small>Abdul Okadigbo</small>
              </div>
              <div className="blog-foot-right">
                <small>12 August 2022</small>
              </div>
            </div>
          </div>
        </article>

        <article class="container-blog3">
        <div class="blog-image">
          <img src={Blog3} alt="blog1"/>
        </div>
        <div className="blog-body">
        <h5 className='blog-title'>10 Secret Tips For Managing A<br/> Remote Team</h5>
        <br/>
          <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora at libero, sequi debitis voluptatum quo explicabo magnam quasi eveniet nam?</small>
          <br/><br/>
        <div className="blog-footer">
        <div className="blog-foot-left">
          <img src={BlogFooter} alt="blog-foot"/>
        </div>
        <div className="blog-foot-center">
        <small>Abdul Okadigbo</small>
        </div>
        <div className="blog-foot-right">
        <small>12 August 2022</small>
        </div>
        </div>
       </div>
      </article>


    
      {/* </div> */}
      </section>
    </div>
  );
};

export default Section6;

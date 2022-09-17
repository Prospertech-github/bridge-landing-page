import React from 'react';
import {FiMail} from 'react-icons/fi';
import './Mainheader2.css';


const Mainheader2 = () => {
  return (
    <div>
      <div className=" container main__head">
        <div className="head-writeup1">
            <h3><span>Join us</span> when we launch</h3>
        </div>
        <div  className="head-writeup2">
        <p>We are working round the clock to make sure we serve you with the<br/>best possible experience. Become part of Bridge today!</p>
        </div>

        <div className='input__form'>
          <i className='icon1'><FiMail/></i>
          <input className="input__field" type='text' placeholder="Enter your email address" focus/>
          <button className="sub-button" type='submit'>Get access</button>
        </div>
      </div>
    </div>
  )
}

export default Mainheader2
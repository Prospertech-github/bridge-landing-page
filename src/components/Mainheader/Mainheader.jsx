import React from 'react';
import './Mainheader.css';

const Mainheader = () => {
  return (
    <header>
      <div className=" container main__header">
        <div className="header-writeup1">
            <h3>Your Mobile <span>Business <br/> Management</span> App</h3>
        </div>
        <div  className="header-writeup2">
        <p>Bridge helps you take full control of your business with<br/> robust inventory, invoicing, and customer management</p>
        </div>

      </div>
    </header>
  )
}

export default Mainheader
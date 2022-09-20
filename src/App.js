import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/Home/Home1';
import './index.css'
// import Navbar from './components/Navbar/Navbar';
// import Ellipse from '../src/assets/Ellipse 2.png';
// import About from './Pages/About/About';
// import Blog from './Pages/Blog/Blog';
// import Contact from './Pages/Contact/Contact';
// import Notfound from './Pages/NotFound/Notfound';


const App = () => {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='about' element={<Home1/>}/>
      <Route path='blog' element={<Home1/>}/>
      <Route path='contact' element={<Home1/>}/>
      <Route path='*' element={<Home1/>}/>

    </Routes>
    {/* /* <Home1/> */}
    </BrowserRouter>
    {/* <div className='ellipse'>
      <img src={Ellipse} alt="ellipse"/>
    </div> */}
    </div>
  )
}

export default App
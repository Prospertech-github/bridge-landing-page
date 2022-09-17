import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './Pages/Home/Home1';
import Navbar from './components/Navbar/Navbar';
import Ellipse from '../src/assets/Ellipse 2.png';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Notfound from './Pages/NotFound/Notfound';
import './index.css'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<Notfound/>}/>

    </Routes>
    {/* /* <Home1/> */}
    </BrowserRouter>
    {/* <div className='ellipse'>
      <img src={Ellipse} alt="ellipse"/>
    </div> */}
    </>
  )
}

export default App
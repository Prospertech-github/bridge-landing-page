import React from 'react'
import Article from '../../components/Article/Article'
import Footer from '../../components/Footer/Footer'
import Headerimg from '../../components/Headerimage/Headerimg'
import Mainheader from '../../components/Mainheader/Mainheader'
import Mainheader2 from '../../components/Mainheader2/Mainheader2'
import Section4 from '../../components/Section 4/Section4'
import Section5 from '../../components/Section5/Section5'
import Section6 from '../../components/Section6/Section6'

const Home = () => {
  return (
    <div>
      <Mainheader/>
      <Headerimg/>
      <Mainheader2/>
      <Section4/>
      <Article/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../TopNavbar/Navbar';
import Jumbotron from '../Jumbotron/Jumbotron';
import CardGrid from '../Cards/Cards';
import News from '../News/News';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';

function Home() {
  return (
    <div>
        <Navbar/>
        <Jumbotron/>
        <CardGrid/>
        <News/>
        <AboutUs/>
        <Footer/>

    </div>
  )
}

export default Home
import React from 'react'
import Navbar from '../TopNavbar/Navbar';
import Banner from '../Banner/Banner';
import HealthInfo from '../HealthInfo/HealthInfo';
import Footer from '../Footer/Footer';
import backimg from '../../assets/medicine.jpg';

function Medical() {
  return (
    <div>
        <Navbar/>
        <Banner
        imgsrc={backimg}
        headerText="Welcome to our Website"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus auctor, venenatis ex et, iaculis odio."/>
        <HealthInfo/>
        <Footer/>
    </div>
  )
}

export default Medical
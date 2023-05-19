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
        headerText="Assiting Our Veterans: Health Awareness & Education"
        bodyText="Discover resources and information to support your well-being"/>
        <HealthInfo/>
        <Footer/>
    </div>
  )
}

export default Medical
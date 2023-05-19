import React from 'react';
import { Link } from 'react-router-dom';
import educationImg from '../../assets/education.jpg';
import insuranceImg from '../../assets/insurance.jpg';
import healthImg from '../../assets/medicine.jpg';
import advocacyImg from '../../assets/advocacy.jpg';
import volunteeringImg from '../../assets/volunteer.jpg';
import supportImg from '../../assets/supports.jpg';
import employmentImg from '../../assets/employ.jpg';
import entrepreneurshipImg from '../../assets/craft.jpg';
import './CardGrid.css';

function Card({ imgSrc, title, description, link }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card__image" />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <Link to={link} className="card__button">Learn More</Link>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="card-grid">
      <Card
        imgSrc={healthImg}
        title="Health Awareness & Education"
        description="Prioritizing your health is essential. Our platform offers a wealth of resources, articles, and videos to increase health awareness"
        link="/medical"
      />
      <Card
        imgSrc={educationImg}
        title="Education & Training"
        description="Continuous learning and personal development are crucial for your professional growth. Discover a vast selection of educational and skill training courses to expand your knowledge and expertise"
        link="/education"
      />
      <Card
        imgSrc={employmentImg}
        title="Employment"
        description="Transitioning from military service to civilian life can be challenging. Our platform provides access to a wide range of job opportunities explore job listings from organizations, both in the public and private sectors that value your unique skill set and experience."
        link="/employment"
      />
      <Card
        imgSrc={entrepreneurshipImg}
        title="Entrepreneurship"
        description="If you aspire to start and grow your own business, our platform provides a range of entrepreneurship courses to equip you with the necessary knowledge and skills."
        link="/entrepreneurship"
      />
      <Card
        imgSrc={insuranceImg}
        title="Insurance"
        description="Protecting your future and your loved ones is paramount. We offer comprehensive information and resources related to insurance options specifically tailored for veterans."
        link="/insurance"
      />
      
      <Card
        imgSrc={advocacyImg}
        title="Advocacy"
        description="We advocate for the rights and well-being of retired military veterans. Stay informed about policy changes, initiatives, and legislative developments that impact the veteran community."
        link="/advocacy"
      />
      <Card
        imgSrc={volunteeringImg}
        title="Online Volunteering"
        description="Make a difference in the lives of others through online volunteering opportunities. Contribute your skills, expertise, and time to meaningful projects and initiatives that align with your interests."
        link="/volunteering"
      />
      <Card
        imgSrc={supportImg}
        title="Support"
        description="We believe in the power of community and mutual support. Our platform provides a unique opportunity for individuals and organizations to contribute their skills and expertise."
        link="/support"
      />
      
    </div>
  );
}

export default Cards;

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
        imgSrc={educationImg}
        title="Education"
        description="Learn about our educational programs and resources."
        link="/education"
      />
      <Card
        imgSrc={insuranceImg}
        title="Insurance"
        description="Get information about our insurance plans and coverage."
        link="/insurance"
      />
      <Card
        imgSrc={healthImg}
        title="Health Awareness"
        description="Learn about important health topics and how to stay healthy."
        link="/medical"
      />
      <Card
        imgSrc={advocacyImg}
        title="Advocacy"
        description="Join our efforts to make a difference in our community."
        link="/advocacy"
      />
      <Card
        imgSrc={volunteeringImg}
        title="Online Volunteering"
        description="Find ways to volunteer and make a difference from home."
        link="/volunteering"
      />
      <Card
        imgSrc={supportImg}
        title="Support"
        description="Get support and resources for yourself or a loved one."
        link="/support"
      />
      <Card
        imgSrc={employmentImg}
        title="Employment"
        description="Find job opportunities and resources to help with your career."
        link="/employment"
      />
      <Card
        imgSrc={entrepreneurshipImg}
        title="Entrepreneurship"
        description="Learn about starting and growing a business."
        link="/entrepreneurship"
      />
    </div>
  );
}

export default Cards;

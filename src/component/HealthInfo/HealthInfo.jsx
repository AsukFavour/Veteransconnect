import React from 'react';
import './HealthInfo.css';
import telemedicine from '../../assets/medicine.jpg';
import healthEducation from '../../assets/medicine.jpg';
import medications from '../../assets/medicine.jpg';

const HealthInfo = () => {
  return (
    <div className="healthinfo">
      <div className="healthinfo__row">
        <div className="healthinfo__section">
          
            <img
              src={telemedicine}
              alt="Telemedicine"
              className="healthinfo__img"
            />
          
          <div className="healthinfo__content">
            <h2 className="healthinfo__title">Telemedicine</h2>
            <p className="healthinfo__info">
            Accessing quality healthcare services is crucial, especially for retired military veterans. Our platform offers telemedicine services, allowing you to connect with healthcare professionals remotely. Our platform ensures that you have convenient and timely access to healthcare, bridging the gap between you and healthcare providers.
            </p>
            <a href="#" className="healthinfo__button">
             More Info
            </a>
          </div>
        </div>
        <div className="healthinfo__section">
          
            <img
              src={healthEducation}
              alt="Health Education"
              className="healthinfo__img"
            />
          
          <div className="healthinfo__content">
            <h2 className="healthinfo__title">Health Education</h2>
            <p className="healthinfo__info">
            We believe that knowledge is empowering when it comes to your health. Our platform provides comprehensive health education resources tailored specifically for retired military veterans. Explore a wide range of articles, videos, and interactive materials covering various health topics, including preventive care, mental health support, nutrition, fitness, and more. Stay informed about the latest developments in healthcare and access valuable insights to make informed decisions about your well-being.
            </p>
            <a href="#" className="healthinfo__button">
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInfo;

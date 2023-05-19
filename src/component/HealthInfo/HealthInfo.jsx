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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="healthinfo__button">
              Learn More
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="healthinfo__button">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="healthinfo__row">
        <div className="healthinfo__section">
          
            <img
              src={medications}
              alt="Medications"
              className="healthinfo__img"
            />
          
          <div className="healthinfo__content">
            <h2 className="healthinfo__title">Medications</h2>
            <p className="healthinfo__info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#" className="healthinfo__button">
              Learn More
            </a>
          </div>
        </div>
        {/* Add additional sections here */}
      </div>
    </div>
  );
};

export default HealthInfo;

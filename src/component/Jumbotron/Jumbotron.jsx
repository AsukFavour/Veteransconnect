import React from 'react';
import './Jumbotron.css'

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="jumbotron__heading">Veterans Struggles in Nigeria</h1>
      <p className="jumbotron__text">Nigeria is home to thousands of veterans who have served their country in various wars and conflicts. Unfortunately, many of these veterans are struggling to get by, with little support from the government or society at large.</p>
      <button className="jumbotron__button">Donate Now</button>
    </div>
  );
}

export default Jumbotron;

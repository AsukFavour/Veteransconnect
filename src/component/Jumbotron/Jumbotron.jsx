import React from "react";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="jumbotron__heading">
        Supporting Veterans in Nigeria and across Africa
      </h1>
      <p className="jumbotron__text">
        Veteran Benevolent Supporting Veterans and retired police officers in
        Nigeria and across Africa. We offer a range of resources, including
        Health Awareness and Education, Training programs , Enterprenuership,
        Employment opportunities and many more.
      </p>
      {/* <button className="jumbotron__button">Donate</button> */}
    </div>
  );
}

export default Jumbotron;

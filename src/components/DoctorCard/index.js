import React from "react";
import "./style.css";

function DoctorCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.name} onClick={props.handleClick} id={props.id} />
      </div>
    </div>
  );
}

export default DoctorCard;

import React from "react";
import  ReactDOM  from "react-dom/client";

export default function Cards(props){
 
return (
    <div className="card-container">
      <img src={`../assets/${props.item.img}`} alt="mountain-image" className="card-img" />
      <div>
      <div className="first-line">
        <img src="../assets/fill.svg" alt="" className="fill" />
        <p>{props.item.location}</p>
        <a href="#" className="view-on-google">View on Google Maps</a>
      </div>

      <h1 className="place-name">{props.item.name}</h1>
      <p className="date">{props.item.date}</p>
      <p className="place-information">{props.item.description}</p>
    </div>
    </div>
  )
}
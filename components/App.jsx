import React from "react";
import Navbar from "./Navbar.jsx";
import Cards from "./Card.jsx";
import data from "./data.jsx";

export default function App(){ 

 let cardComponent = data.map((item)=>{
  return(
  <Cards
  key={item.id}
  item={item}
/>
      )});

  return (
  <div>
  <Navbar/>
  <div className="card-list-container">
  {cardComponent}
  </div>
 
  </div>
  )
}

/*const Cardsdata =data.map((card)=>{
  return(
  <Cards
  key={card.id}
  card={card}
  />
  )});*/
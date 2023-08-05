import React from "react";
import "./Card.css";

function Card({imageUrl, Title, Description}) {
  return (
    <div className='card'>
      <img src={imageUrl} alt='Card Image' />
      <div className='card-title'>{Title}</div>
      <div className="card-decription">{Description}</div>
    </div>)
}
export default Card
import React from "react";
import "./Card.css";

function handleclick (Title){
  console.log(Title,"clicked")
}
function Card({imageUrl, Title, Description}) {
  return (
    <div className="cardcontainer">
    <div className='card m-1 p-1 text-center'>
      <img className ="cardimage" src={imageUrl} onClick={() => handleclick(Title)} alt='Card displaying a service' />
      <div className='card-title'>{Title}</div>
    </div>
    </div>
    )

}
export default Card
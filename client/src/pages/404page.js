//todo
import React from "react";
import { Link } from "react-router-dom";
import './styles/404page.css'
function Pagenotfound(){
return(
  <div>
  <div className="pagenotfound">
    
    <h1 className="oops">Oops...Wrong Page</h1>
    
 
  <Link to="/">
  <h2>back to home</h2>
  </Link>
  </div>
  </div>
)
}
export default Pagenotfound;
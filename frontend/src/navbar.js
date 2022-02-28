import React from "react";
import '../src/navbar.css'

class Navbar extends React.Component
{
render(){
    return(
        <div id="nav">
           <ul id="list">
               <li><a href="/home">Home</a></li>
               <li><a href="/profile">Profile</a></li>
               <li><a href="/status">Status</a></li>
               <li><a href="/about">About</a></li>
           </ul>
        </div>
    );
}
}

export default Navbar;
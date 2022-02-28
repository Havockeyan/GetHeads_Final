import React from "react";
import '../src/navbar.css'
import '../src/navbar.css';

class Anavbar extends React.Component
{
render(){
    return(
        <div id="nav">
           <ul id="list">
               <li><a href="/addjob">Home</a></li>
               <li><a href="/userlist">Candidates</a></li>
               <li><a href="/a_about">About</a></li>
           </ul>
        </div>
    );
}
}

export default Anavbar;
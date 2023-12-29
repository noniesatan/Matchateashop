
import React from 'react';

// import Booking from '../booking';
import  leaff from "../../assets/img/leaf.svg";

// import "/App.jsx";

// import { BrowserRouter } from "react-router-dom";
// import { Hashlink as Link } from "react-router-dom";



export default function Navbar(){
    const navstyle = {
        backgroundColor : "#f2f2e6",
       
    };
    const sumstyle = {
        marginRight: "20px",
    };
    const textmatcha = {
        color: "#01803e",
         

    };

    const imgtt = {
        width: "30px",
        
    };


    return(
   
  <div className="navbar bg-base-100" style={navstyle}>
    <div className="flex-1">
    <a className="btn btn-ghost text-xl " style={textmatcha} >
    <img src={leaff} alt="" style={imgtt }/>Fuji Matcha Cafe'</a>
   
        
  </div>


  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    
      <li><a href='#About1'>About</a></li>
      <li><a href='#Menu1'>Menu</a></li>
      <li ><a href='#Book1'>Booking</a></li>
      
      <li>
        <details>
          <summary style={sumstyle}>
            Shop
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Contact</a></li>
            <li><a>Jobs</a></li>
            <li><a>Location</a></li>
            <li><a>Email</a></li>
            
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

    );

    

}
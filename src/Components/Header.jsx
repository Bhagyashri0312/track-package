import React from "react";

import dhl from "../assets/images/dhl.png"; 
import "../Style/header.css";
export default function Header(){
    return(
        <div>
            <header className= "header">
            <img src= {dhl} alt = "Logo" />
            </header>
            
        </div>
            
        
    );
}
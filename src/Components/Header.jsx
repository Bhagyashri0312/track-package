import React from "react";

import dhl from "../assets/images/logo.png"; 
export default function Header(){
    return(
        <div>
            <header className= "header">
            <img src= {dhl} alt = "Logo" />
            </header>
            
        </div>
            
        
    );
}
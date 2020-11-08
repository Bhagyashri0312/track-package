//React core
import React from "react";
//Icons 
import { FaUserCircle } from 'react-icons/fa';
import { FaMobileAlt } from "react-icons/fa";
//Media assets
import logo from "../assets/images/logo.png"; 

export default function Header(){
   //Render
    return(
        
            <header className= "header">
                <div className="grid">
            <article className="logo">
                <img className="photo" src= {logo} alt = "Logo"  />
            </article>
            

            <article className="icon">
                <ul>
                    <li>
                        < FaUserCircle  size="1em" color="purple" /> John Doe
                    </li>
                    <li>
                        < FaMobileAlt size="1em" color="purple" /> +46 729478015
                    </li>
                </ul>
                
            </article>

        
          
            </div>
            
            </header>
            
       
            
        
    );
}
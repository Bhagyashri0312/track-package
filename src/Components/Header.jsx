import React from "react";
import { FaUserCircle } from 'react-icons/fa';
import logo from "../assets/images/logo.png"; 
export default function Header(){
   
    return(
        
            <header className= "header">
                <div className="grid">
            <article className="logo">
                <img className="photo" src= {logo} alt = "Logo"  />
            </article>
            

            <article className="icon">
                < FaUserCircle  size="2em" color="purple" />
                
            </article>
           <article className="text">
               <h4 className = "text"> John Doe </h4>
               </article>
          
            </div>
            
            </header>
            
       
            
        
    );
}
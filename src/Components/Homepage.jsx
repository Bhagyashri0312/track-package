import React from "react";
import Header from "../Components/Header"
import Information from "../Components/Information";
import "../Css/Style.css";

export default function Homepage() {
  
  return (
    <aside className ="Homepage">
      
      <div>
        <Header />
      </div>

      <div>
        <Information />
      </div>
    </aside>
    
  );
}

import React from "react";
import Header from "./Components/Header"
import Information from "./Components/Information";
import "./Css/Style.css";

export default function App() {
  
  return (
    <aside className ="App">
      
      <div>
        <Header />
      </div>

      <div>
        <Information />
      </div>
    </aside>
    
  );
}


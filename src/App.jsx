


import React from "react";
import Header from "./Components/Header"
import Information from "./Components/Information";
import "./Css/Style.css";
import { useTranslation } from 'react-i18n';

export default function App() {
  const {t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang)
  }
  


  return (
    <aside className ="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}>
        <button onClick={() => handleClick('en')} >
          English
        </button>
        <button onClick={() => handleClick('se')} >
          Swedish
        </button>
      </nav>
      <div>
        <Header />
      </div>
      <div>
        <Information />
      </div>
    </aside>
    
  );
}


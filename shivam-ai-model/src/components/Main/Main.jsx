import React from 'react';
import "./Main.css";
import { assets } from "../../assets/assets.js";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>HIRO</p>
        <img src={assets.user_icon} alt="user icon" />
        
      </div>
    </div>

    
  );
};

export default Main;

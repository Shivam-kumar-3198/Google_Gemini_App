import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const cardData = [
  { text: "Suggest beautiful places to see on an upcoming road trip", icon: assets.compass_icon },
  { text: "Briefly summarize top destinations for a road trip", icon: assets.bulb_icon },
  { text: "Brainstorm team bonding activities for our work retreat", icon: assets.message_icon },
  { text: "Improve the readability of the following code", icon: assets.code_icon },
  // …add more cards here if you like…
];

export default function Main() {
  return (
    <div className="main">
      {/* Row 1: Nav */}
      <div className="nav">
        <p>HIRO</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>

      {/* Row 2: Greeting */}
      <div className="greet">
        <p><span>Hello, Dev</span></p>
        <p>How can I help you today?</p>
      </div>

      {/* Row 3: Scrollable Cards */}
      <div className="content">
        <div className="cards">
          {cardData.map((c, i) => (
            <div key={i} className="card">
              <p>{c.text}</p>
              <img src={c.icon} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 4: Footer/Input */}
      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder="Enter a prompt here" />
          <div className="icons">
            <img src={assets.gallery_icon} alt="Gallery" />
            <img src={assets.mic_icon} alt="Mic" />
            <img src={assets.send_icon} alt="Send" />
          </div>
        </div>
        <p className="bottom-info">
          Hiro may display inaccurate information, including about people. Please verify responses.
        </p>
      </div>
    </div>
  );
}

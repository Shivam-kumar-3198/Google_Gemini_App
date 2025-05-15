import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets.js";

const Main = () => {
  return (
    <div className="main">
      <div className="main__nav">
        <p className="main__title">Gemini</p>
        <img
          className="main__user-icon"
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>

      <div className="main__container">
        <div className="main__greet">
          <p>
            <span>Hello, Developer</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="main__cards">
          {[
            {
              text: "Suggest beautiful places to see on an upcoming road trip",
              icon: assets.compass_icon,
              alt: "Compass",
            },
            {
              text: "Briefly summarize this concept: urban planning",
              icon: assets.bulb_icon,
              alt: "Bulb",
            },
            {
              text: "Brainstorm team bonding activities for our work retreat",
              icon: assets.message_icon,
              alt: "Message",
            },
            {
              text: "Improve the readability of the following code",
              icon: assets.code_icon,
              alt: "Code",
            },
          ].map((card, i) => (
            <div className="main__card" key={i}>
              <p>{card.text}</p>
              <img src={card.icon} alt={card.alt} />
            </div>
          ))}
        </div>

        <div className="main__bottom">
          <div className="main__search-box">
            <input
              className="main__input"
              type="text"
              placeholder="Enter your prompt here"
            />
            <div className="main__search-icons">
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              <img src={assets.send_icon} alt="Send" />
            </div>
          </div>
          <p className="main__disclaimer">
            Gemini may display inaccurate info, including about people, so
            double-check its information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets.js";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className={`sidebar ${extended ? "expanded" : "collapsed"}`}>

      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="menu_icon"
          onClick={() => setExtended(!extended)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended && <p>New Chat</p>}
        </div>

        <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
            <img src={assets.message_icon} alt="message_icon" />
            {extended && <p>What is react..</p>}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-item">
          <img src={assets.question_icon} alt="question_icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.history_icon} alt="history_icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

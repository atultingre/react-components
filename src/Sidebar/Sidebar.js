import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <header>
        <div className="side-nav">
          <div className="user">
            <img className="user-img" src="images/user.png" alt="" className="user-img" />
            <div>
              <h2>Atul Tingre</h2>
              <p className="email">tingre48@gmail.com</p>
            </div>
            <img src="images/star.png" alt="" className="star-img" />
          </div>
          <ul className="side-ul">
            <li className="side-li">
              <img src="images/dashboard.png" alt="Dashboard" />
              <p>Dashboard</p>
            </li>
            <li className="side-li">
              <img src="images/reports.png" alt="reports" />
              <p>reports</p>
            </li>
            <li className="side-li">
              <img src="images/rewards.png" alt="rewards" />
              <p>rewards</p>
            </li>
            <li className="side-li">
              <img src="images/messages.png" alt="messages" />
              <p>messages</p>
            </li>
            <li className="side-li">
              <img src="images/video-chat.png" alt="video-chat" />
              <p>video-chat</p>
            </li>
            <li className="side-li">
              <img src="images/projects.png" alt="projects" />
              <p>projects</p>
            </li>
            <li className="side-li">
              <img src="images/members.png" alt="members" />
              <p>members</p>
            </li>
            <li className="side-li">
              <img src="images/setting.png" alt="setting" />
              <p>setting</p>
            </li>
          </ul>
          <ul className="side-ul logout">
            <li className="side-li">
              <img src="images/logout.png" alt="logout" />
              <p>logout</p>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Sidebar;

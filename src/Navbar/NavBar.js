import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo">
            ATUL
            <i className="fas fa-code"></i>
          </NavLink> */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Timeline
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/timeline1"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Timeline1
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/progressbar"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Progressbar
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/skeleton"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Skeleton
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/search&filter"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Search & Filter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/infinitescroll"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Infinite Scroll
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

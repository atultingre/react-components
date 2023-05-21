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
                exact="true"
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Timeline
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/timeline1"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Timeline1
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/progressbar"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Progressbar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/skeleton"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Skeleton
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/search&filter"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Search & Filter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/infinitescroll"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Infinite Scroll
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/sidebar"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                sidebar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/toastify"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Toastify
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/modal"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Modal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/tooltip"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Tooltip
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/countup"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                Countup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/reactcolor"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
               React Color
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/datepicker"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
               Date Picker
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/videoplayer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
               Video Player
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/loader"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
               Loader
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

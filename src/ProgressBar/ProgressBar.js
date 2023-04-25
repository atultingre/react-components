import React from "react";
// import "./ProgressBar.css"
const ProgressBar = () => {
  return (
    <div className="progressbar-container">
      <div className="skills">
        <h2>HTML</h2>
        <div className="progress-bar">
          <div className="html">
            <span className="percentage">86%</span>
          </div>
        </div>
        <h2>CSS</h2>
        <div className="progress-bar">
          <div className="css">
            <span className="percentage">74%</span>
          </div>
        </div>
        <h2>JavaScript</h2>
        <div className="progress-bar">
          <div className="js">
            <span className="percentage">70%</span>
          </div>
        </div>
        <h2>React</h2>
        <div className="progress-bar">
          <div className="react">
            <span className="percentage">65%</span>
          </div>
        </div>
          <h2>NodeJs</h2>
        <div className="progress-bar">
          <div className="node">
            <span className="percentage">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

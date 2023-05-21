import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="App">
      <h1>Loading Component</h1>
      <BounceLoader loading size={90} color="hotpink"  />
      <BarLoader loading size={55} color="yellow"  />
      <BeatLoader loading size={72} color="blue" />
    </div>
  );
};

export default Loader;

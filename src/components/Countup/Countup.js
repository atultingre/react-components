import React from "react";
import CountUp from "react-countup";


const Countup = () => {
    // const { countUp, start, pauseResume, reset, update } = useCountUp({
    //     duration: 5,
    //     end: 10000,
    //     startOnMount: false
    //   });

  return (
    <div>
      <div className="App" style={{ color: "white" }}>
        <h1>Countup</h1>
        {/* <div>
      <h1>{countUp}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause / Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
      <button onClick={reset}>Reset</button>
    </div> */}
        <h1>
          <CountUp end={200} />
        </h1>
        <h1>
          <CountUp end={200} duration={5} />
        </h1>
        <h1>
          <CountUp start={500} end={1200} duration={5} />
        </h1>
        <h1>
          <CountUp end={1200} duration={6} prefix="$" decimals={2} />
        </h1>
        <h1>
          <CountUp end={1200} duration={6} suffix=" INR" decimals={2} />
        </h1>
      </div>
    </div>
  );
};

export default Countup;

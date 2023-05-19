import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import React, { forwardRef } from "react";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colored Tooltip</span>;
};

const CustomChield = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{color: "white"}}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});

const Tolltip = () => {
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <div style={{ paddingBottom: "50px" }}>
        <Tippy  arrow={false} delay={1000} content="Basic Tooltip">
          <button className="btn">Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <Tippy placement="right" content={<span style={{ color: "orange" }}>Colour</span>}>
          <button className="btn">Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <Tippy placement="bottom" content={<ColoredTooltip />}>
          <button className="btn">Hover</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: "50px" }}>
        <Tippy placement="left" content={<ColoredTooltip />}>
          <CustomChield/>
        </Tippy>
      </div>
    </div>
  );
};

export default Tolltip;

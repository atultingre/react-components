import React, { useState } from "react";
import { ChromePicker } from "react-color";

const ReactColor = () => {
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="App">
      <h1>React Color</h1>
      <button className="btn"
        onClick={() =>
          setShowColorPicker((showColorPicker) => !showColorPicker)
        }>
        {showColorPicker ? " Close color picker" : " Pick a color"}
      </button>
      {showColorPicker && (
        <ChromePicker
          color={color}
          onChange={(updatedColor) => setColor(updatedColor.hex)}
        />
      )}
      <h1>You picked {color}</h1>
    </div>
  );
};

export default ReactColor;

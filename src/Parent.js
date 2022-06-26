import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); // initial value
  const [childrenColor, setChildrenColor] = useState("#FFF");


  function handleColorChange(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); // update color state to a new value
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleColorChange}/>
      <Child color={childrenColor} onChangeColor={handleColorChange}/>
    </div>
  );
}

export default Parent;

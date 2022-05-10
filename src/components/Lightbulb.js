import { useState } from "react";

function Lightbulb() {
  const [isOn, setIsOn] = useState(true);

  function onToggle() {
    setIsOn(!isOn);
  }

  return (
    <div className="Lightbulb">
      <h1>Lightbulb is {isOn ? "ON" : "OFF"}</h1>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}

export default Lightbulb;
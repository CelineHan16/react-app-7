import { useState } from "react";

function ThemeColor() {
  const [theme, setTheme] = useState('light');

  const color = theme ? "#333" : "#FFF";
  const backgroundColor = theme ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  function toggleTheme() {
    setTheme(!theme);
  }

  return (
    <div className="ThemeColor">
      <h1>Theme mode</h1>
      <button onClick={toggleTheme}>Switch to {theme ? 'dark' : 'light'} mode</button>
    </div>
  );
}

export default ThemeColor;
import React, { useState } from "react";

function Backgroundcolor() {
  const [background, setBackground] = useState("#000000");

  const handleColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackground(randomColor);
  };

  return (
    <div className="background" style={{ background }}>
      <header className="color-header">
        <h1>Random Background Color Changer</h1>
        <button className="color-btn" onClick={handleColor}>
          Random Color
        </button>
      </header>
    </div>
  );
}

export default Backgroundcolor;

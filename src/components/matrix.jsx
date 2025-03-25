// Matrix Component
import { useState } from "react";
function Matrix() {
  // State Management
  const [color, setColor] = useState(Array(9).fill("white"));
  const [sequence, setSequence] = useState([]);

  // handeling click function
  let handleClick = (index) => {
    // check weather box color is white
    if (color[index] === "white") {
      const newColor = [...color];
      newColor[index] = "green";
      setColor(newColor);
    }

    // updating sequence
    setSequence((prevSq) => {
      const newSq = [...prevSq, index];

      //last box clicked
      if (newSq.length === 9) {
        newSq.forEach((idx, i) => {
          setTimeout(() => {
            setColor((prevColor) => {
              const updatecolor = [...prevColor];
              updatecolor[idx] = "orange";
              return updatecolor;
            });
          }, i * 500);
        });
      }
      return newSq;
    });
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,50px)",
        alignContent: "center",
        gap: "2px",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {color.map((color, idx) => (
        <div
          key={idx}
          onClick={() => handleClick(idx)}
          style={{
            width: 50,
            height: 50,
            backgroundColor: color,
            border: "1px solid black",
            cursor: "pointer",
          }}
        ></div>
      ))}
    </div>
  );
}
export default Matrix;

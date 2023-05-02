import { useState } from "react";

// Create a select dropdown that updates the background color of the page when a new color is selected.
const SetBackground = () => {
  const [color, setColor] = useState("");
  const colorsList = ["White", "Pink", "Tomato", "Aqua Marine"];
  const HandleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <h1>Set Background Color</h1>
      <div className="bg-changer" style={{ backgroundColor: color }}>
        <select onChange={HandleChange}>
          {colorsList.map((item) => {
            return (
              <option key={item} value={item.toLowerCase().replace(" ", "")}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SetBackground;

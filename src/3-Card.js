import { useState } from "react";

// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
const Slider = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const HandleInputChange = (event) => {
    setRangeValue(event.target.value);
  };
  return (
    <div className="slider-card" style={{ borderRadius: `${rangeValue}px` }}>
      <h1>Card with Rounded Corners</h1>
      <label>
        Border Radius:
        <input type="range" value={rangeValue} onChange={HandleInputChange} />
      </label>
    </div>
  );
};
export default Slider;

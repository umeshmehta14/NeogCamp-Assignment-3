// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.

import { useState } from "react";

const city = [
  { id: 1, name: "London", detail: "London is Capital of England." },
  { id: 2, name: "Paris", detail: "Paris is Capital of France." },
  { id: 3, name: "Tokyo", detail: "Japan is Capital of Japan." },
  { id: 4, name: "New York", detail: "New York is Capital of U.S.A." }
];

const Tabs = () => {
  const [selectedCity, setSelectedCity] = useState();

  const HandleCLick = (itemId) => {
    if (selectedCity?.id === itemId) {
      setSelectedCity("");
    } else {
      const findedCity = city.find(({ id }) => id === itemId);
      setSelectedCity(findedCity);
    }
  };
  return (
    <div className="tab-container">
      {city.map(({ id, name }) => {
        return (
          <span key={id}>
            <button className="btn" onClick={() => HandleCLick(id)}>
              {name}
            </button>
          </span>
        );
      })}
      {selectedCity && (
        <div className="detail-box">
          <h3>{selectedCity?.name}</h3>
          <p>{selectedCity?.detail}</p>
        </div>
      )}
    </div>
  );
};
export default Tabs;

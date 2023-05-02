// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.

import { useState } from "react";

const GroceryList = () => {
  const [listItem, setListItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [completedList, setCompletedList] = useState([]);

  const storeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const AddList = () => {
    if (listItem.includes(inputValue)) {
      alert("This item is already in the list");
    } else {
      setListItem([...listItem, inputValue]);
      setInputValue("");
    }
  };

  const handleCompleteList = (checkedList) => {
    setListItem(() => listItem.filter((item) => item !== checkedList));
    setCompletedList([...completedList, checkedList]);
  };
  return (
    <>
      <h1>Grocery List</h1>
      <label>
        Add item:
        <input type="text" value={inputValue} onChange={storeInputValue} />
      </label>
      <button disabled={inputValue === ""} onClick={AddList}>
        Add
      </button>
      <ul>
        {listItem.map((item) => {
          return (
            <li key={item}>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCompleteList(item)}
                />
                {item}
              </label>
            </li>
          );
        })}
      </ul>
      <h1>Completed List</h1>
      <ul>
        {completedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default GroceryList;

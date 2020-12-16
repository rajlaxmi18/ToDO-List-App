import React, { useState } from 'react';
import List from './List'

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>
          <ol>
            {items.map((itemval, index) => {
              return <List
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
}


export default App;
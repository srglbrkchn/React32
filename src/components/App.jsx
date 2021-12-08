import React, { useState } from "react";

function App() {
  const [item, setItem]=useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const inputValue = event.target.value;
    setItem(inputValue);
  }

  function handleClick () {
    setItems(preValue => {
      return (
        [...preValue,
          item
        ]
      );
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick = {handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>

          {
            items.map((item, index)=> {
              return (<li key={index}>{item}</li>);
            })
          }
          
        </ul>
      </div>
    </div>
  );
}

export default App;

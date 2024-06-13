import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setInputText(value);
  }

  function handleClick() {
    if (inputText.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText('');
    }
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input onChange={handleChange} value={inputText} type='text' />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [isButtonClicked, setButtonClicked] = useState(false);

  function handleClick() {
    setButtonClicked(true);
  }

  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }
  return (
    <div className='container'>
      <h1>Hello {isButtonClicked && name + '!'}</h1>
      <input
        onChange={handleChange}
        type='text'
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

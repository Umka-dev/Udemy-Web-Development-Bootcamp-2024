import React from 'react';

function App() {
  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }
  return (
    <div className='container'>
      <h1>Hello </h1>
      <input
        onChange={handleChange}
        type='text'
        placeholder="What's your name?"
      />
      <button>Submit</button>
    </div>
  );
}

export default App;

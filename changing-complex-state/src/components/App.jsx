import React, { useState } from 'react';

function App() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [headingText, setHeading] = useState('');

  function handleClick(event) {
    // setHeading(name + " " + lastName);
    event.preventDefault();
  }

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }

  return (
    <div className='container'>
      <h1>Hello {fName + ' ' + lName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={updateFName}
          type='text'
          name='fName'
          placeholder='First Name'
          value={fName}
        />
        <input
          onChange={updateLName}
          type='text'
          name='lName'
          placeholder='Last Name'
          value={lName}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;

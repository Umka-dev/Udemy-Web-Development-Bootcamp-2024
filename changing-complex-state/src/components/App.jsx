import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [headingText, setHeading] = useState('');

  function handleClick(event) {
    // setHeading(name + " " + lastName);
    event.preventDefault();
  }

  function handleChangeFN(event) {
    setName(event.target.value);
  }

  function handleChangeLN(event) {
    setLastName(event.target.value);
  }

  return (
    <div className='container'>
      <h1>Hello {name + ' ' + lastName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChangeFN}
          type='text'
          name='fName'
          placeholder='First Name'
          value={name}
        />
        <input
          onChange={handleChangeLN}
          type='text'
          name='lName'
          placeholder='Last Name'
          value={lastName}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;

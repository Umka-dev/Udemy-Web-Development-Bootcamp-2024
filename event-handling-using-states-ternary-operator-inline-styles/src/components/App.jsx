import React, { useState } from 'react';

function App() {
  const [headingText, setHeadingText] = useState('Hello');

  function handleClick() {
    setHeadingText('Submited');
  }

  const [mystyle, setMyStyle] = useState({ backgroundColor: 'white' });

  function hoverIt() {
    setMyStyle({ backgroundColor: 'black' });
  }

  function unHoverIt() {
    setMyStyle({ backgroundColor: 'white' });
  }

  return (
    <div className='container'>
      <h1>{headingText}</h1>
      <input type='text' placeholder="What's your name?" />
      <button
        style={mystyle}
        onClick={handleClick}
        onMouseOver={hoverIt}
        onMouseOut={unHoverIt}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

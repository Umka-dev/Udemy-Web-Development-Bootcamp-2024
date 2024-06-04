import React from 'react';

// Declarative Programming and States
// function App() {
//   var isDone = false;
//   const strikeThrough = { textDecoration: "line-through" };
//   return <p style={isDone ? strikeThrough : null}>Buy milk</p>;
// }

// Imperative programming
function strike() {
  document.getElementById('root').style.textDecoration = 'line-through';
}

function unStrike() {
  document.getElementById('root').style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;

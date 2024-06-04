import React from "react";

function App() {
  var isDone = false;
  const strikeThrough = { textDecoration: "line-through" };
  return <p style={isDone ? strikeThrough : null}>Buy milk</p>;
}

export default App;

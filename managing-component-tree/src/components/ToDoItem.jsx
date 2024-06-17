import React, { useState } from 'react';

function ToDoItem(props) {
  const [clicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      setClicked(newCount % 2 === 1);
      return newCount;
    });
  }

  return (
    <div>
      <li
        style={{ textDecoration: clicked ? 'line-through' : 'none' }}
        onClick={handleClick}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;

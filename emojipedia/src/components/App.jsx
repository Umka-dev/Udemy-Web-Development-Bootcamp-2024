import React from "react";
import { Card } from "./Card";
import emojipedia from "../emojipedia";

// console.log(emojipedia);

function createCard(emojiTerm) {
  return (
    <Card
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;

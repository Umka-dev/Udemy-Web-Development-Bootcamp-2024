import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        id: prevNote.id || uuidv4(),
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (
      note.title.trim() === ""
      // || note.content.trim() === ""
    ) {
      return;
    }
    props.onAdd(note);
    setNote({
      id: "",
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          value={note.content}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

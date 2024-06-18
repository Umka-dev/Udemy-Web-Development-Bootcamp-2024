import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '../../node_modules/@mui/icons-material/Add';
import { Fab } from '../../node_modules/@mui/material';
import { Zoom } from '../../node_modules/@mui/material';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const [isClicked, setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setClicked(true);
  }

  function submitNote(event) {
    event.preventDefault();
    if (
      // note.title.trim() === "" ||
      note.content.trim() === ''
    ) {
      return;
    }
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className='create-note'>
        {isClicked && (
          <input
            name='title'
            onChange={handleChange}
            value={note.title}
            placeholder='Title'
          />
        )}

        <textarea
          name='content'
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder='Take a note...'
          rows={isClicked ? 3 : 1}
        />
        <Zoom in={isClicked}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

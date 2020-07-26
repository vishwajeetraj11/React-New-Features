import React, { useState, useContext } from 'react';

import NotesContext from '../context/notes-context';

const NoteForm =  () => {

    const {dispatch} = useContext(NotesContext);

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

        
    const addNote = (e) => {
        e.preventDefault();
        // setNotes([...notes, { title, body }]);
        dispatch({type:'ADD_NOTE', title, body });
        setTitle("");
        setBody("");
      };

    return (
        <>
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input value={body} onChange={(e) => setBody(e.target.value)}></input>
                <button>add note</button>
            </form>
        </>
        );
    } 

export { NoteForm as default };





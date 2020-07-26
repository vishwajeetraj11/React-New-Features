import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from './../context/notes-context';

const NoteList = () => {
    const {notes} = useContext(NotesContext);
   return  notes.map((element) => {
        return (
         <Note key={element.title} element={element} />
        );
      })
}

export { NoteList as default }
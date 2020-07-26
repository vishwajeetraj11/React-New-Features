import React, { useEffect, useReducer } from "react";
import notesReducer from '../Reducers/NotesReducer';
import NoteForm from "./NoteForm";
import NotesContext from '../context/notes-context';
import NoteList from './NoteList';

export default () => {
    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);
  
    useEffect( () => {
      const notesData = JSON.parse(localStorage.getItem('notes'));
  
      if(notesData) {
        dispatch({ type: 'POPULATE_NOTES', notes: notesData })
        // setNotes(notesData)
      }
    } ,[]);
  
    useEffect( () => {
      localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);
  
    return (
      <NotesContext.Provider value={{notes,dispatch}}>
        <h1>Notes App</h1>
        <NoteList />
        <NoteForm />
      </NotesContext.Provider>
    );
  };
  
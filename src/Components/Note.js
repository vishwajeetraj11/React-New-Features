
import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';




export default ({ element }) => {
  
  const position = useMousePosition()

  const { dispatch } = useContext(NotesContext);

  // Setup state to track x and y position (useState)
  // Setup event to listen for mouse movement
  // Remove Event listener if unmounted (useEffect)

    return (
      <div key={element.title}>
      <p key={element.title}>{element.title}</p>
      <p>{position.x}, {position.y}</p>
      <span>{element.body}</span>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title:element.title})}>&times;</button>
    </div>
    )
  }
         
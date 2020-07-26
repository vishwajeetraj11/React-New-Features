import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NoteApp from './Components/NoteApp';  


ReactDOM.render(<NoteApp />, document.getElementById("root"));
serviceWorker.unregister();






















// const App = (props) => {

//   const [count, setCount] = useState(props.count)
//   const increment = () => {
//     setCount(count+1)
//   }

//   const [text, setText] = useState(props.text)

//   useEffect( () => {
//     console.log('useEffect Ran Once') 
//     document.title = count 
//   });

//   return (
//     <div>
//       <p>The Current {text} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={() => { setCount(count-1) }}>-1</button>
//       <button onClick={() => { setCount(props.count) }}>reset</button>
//       <input type="text" onChange={(e)=> { setText(e.target.value) }} />
//     </div>
//   )
// }

// App.defaultProps = {
//   count: 0,
//   text: 'Count'
// }

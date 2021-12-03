import "./styles.css";
import {useRef, useState} from 'react';
import ToDoList from './ToDoList';

let initialstate=[{key:1,id :1,item:'sample',checked:false}];
export default function App() {
  const[list,setlist]=useState(initialstate);
  const textboxref=useRef();

  const addTodoitem=()=>
  {
    let textbox=textboxref.current.value;
    let copy = [...list];
    copy = [...copy, { key:list.length+1,id: list.length + 1, item: textbox, checked: false }];
    setlist(copy);
    textboxref.current.value='';

  }
 
  return (
    <div>
    <div className="App">
      <input  type="text" ref={textboxref}></input>
      <button onClick={addTodoitem}>SUBMIT</button>
      </div>
      <div>
      <ToDoList toDoList={list}/>
      </div>
    </div>
  );
}

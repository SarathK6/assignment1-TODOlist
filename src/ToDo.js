import React from 'react';
import "./styles.css";
 
const ToDo = ({todo}) => {
   return (
<div className="parentdiv">
    <div>
      <input type="checkbox" 
      id={todo.id} 
      name={todo.id} 
      value={todo.item}
      checked={todo.isChecked}/>

    </div>
       <div >
           {todo.item}
       </div>
    </div>
       
   );
};
 
export default ToDo;
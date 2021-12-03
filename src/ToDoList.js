import React from 'react';
import ToDo from './ToDo';
import "./styles.css";

const ToDoList = ({toDoList}) => {
  return (
      <div>
        <div className="Heading">To Do List </div>
          {toDoList.map(todo => {
              return (
                  <ToDo key={todo.key} todo={todo} />
              )
          })}
      </div>
  );
};

export default ToDoList;
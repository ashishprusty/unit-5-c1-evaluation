import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";
import { useState } from "react";

const Task = ({todos,deletetodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  const [iscomplete, setIsCompleated] = useState(todos.iscomplete);
  return (
    // <li data-cy="task" className={styles.task}>
    //   <input type="checkbox" data-cy="task-checkbox" />
    //   <div data-cy="task-text">{props.todo}</div>
    //   {/* Counter here */}
    //   <Counter/>
    //   <button data-cy="task-remove-button">Delete</button>
    // </li>
    <>
      {todos.map((value) => (
       <li data-cy="task" className={styles.task}>
       {  console.log(value)}
         <input type="checkbox" data-cy="task-checkbox" onClick={(e)=>{
           setIsCompleated(e.target.checked)
}}/>
        <div data-cy="task-text"className={iscomplete ? styles.stricked : ""}>{value.value}</div>
         {/* Counter here */}
         <Counter/>
         <button data-cy="task-remove-button" onClick={()=>(
             deletetodo(value)
         )}>Delete</button>
       </li>
    ))}</>
  

  )
};

export default Task;

import React from "react";
import styles from "./tasks.module.css";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import { useState } from "react";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  
  const [todos,setTodos] = useState([])

  const addTodo = (value)=>{
    setTodos([...todos,{value:value ,iscomplete:false}])
  }

  const deletetodo = (value)=>{
    console.log(value)
     setTodos(todos.filter((todo)=>(todo!==value)));
  }
  return (
    <>
    <div className={styles.container}>
       <AddTask addTodo={addTodo}/>
        <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task todos={todos} deletetodo={deletetodo} />
       </ul>
        <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
         </div>
    </div>
    </>
  );
};

export default Tasks;

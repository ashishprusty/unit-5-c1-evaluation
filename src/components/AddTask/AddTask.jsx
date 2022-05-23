import React, { useState } from "react";
import styles from "./addTask.module.css";


const AddTask = ({addTodo}) => {
  const [value, setvalue] = useState("");
  // const [todo,settodo] = useState ([])
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    <div className={styles.todoForm}>
      <input type="text" value={value} data-cy="add-task-input" onChange={(e)=>(
        setvalue(e.target.value)
      )}  />
      <button data-cy="add-task-button" onClick={()=>{
        // settodo([...todo,{value:value}]);
        // console.log(todo)
        addTodo(value)
        setvalue("")
      }}>+</button>
      
    </div>

    {/* <div>
          {todo.map((value) => (
          <Task todo={value.value} />
        ))}
    </div> */}
    </>
  );
};

export default AddTask;

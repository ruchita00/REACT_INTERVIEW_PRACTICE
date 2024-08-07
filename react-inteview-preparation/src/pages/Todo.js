import React, { useState } from "react";

const Todo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };
  const handleDelete = (index) => {
    const newValue = [...tasks];
    newValue.splice(index, 1);
    setTasks(newValue);
  };
  const handleEdit = (index, text) => {
    const newValue = [...tasks];
    newValue[index] = text;
    setTasks(newValue);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="add something here"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <div>
        <button onClick={handleAdd}>add</button>
      </div>
      {tasks.map((item, index) => {
        return (
          <>
            <li>{item}</li>
            <button onClick={() => handleEdit(index)}>edit</button>
            <button
              onClick={() => handleEdit(index, prompt("edit tasks", tasks))}
            >
              edit
            </button>
          </>
        );
      })}
    </div>
  );
};

export default Todo;

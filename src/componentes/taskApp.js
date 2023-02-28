import { useState } from "react";
import Task from "./task";
import './taskApp.css';
export default function TaskApp() {
  const [title, setTitle] = useState(""); 
  const [tasks, setTasks] = useState([]); //el cajon de los elementos
  
  

  function handleChange(e){
    const value = e.target.value;
    setTitle(value); 
  }

  function handleSubmit(e){
    e.preventDefault();
    const newTaks= {
        id: Date.now(),
        title: title,
        completed: false
    };
    
    const temp = [...tasks]; //es como hacer una copia 
    temp.unshift(newTaks);
    setTasks(temp); // se cambia todo el valor como un copi pegue pero insertando un elemento nuevo
    setTitle("");
  }
  function handleUpdate(id, value){
    const temp = [...tasks];
    const item = temp.find(item => item.id == id);
    item.title = value;
    setTasks(temp);
  }
  
  function handleDelete (id){
      const temp = tasks.filter(item => item.id != id );
      setTasks(temp);
  }

  return (
    <div className="mainContainer">
      <h1>Create your Task</h1>
      <form className="mainContainerForm" onSubmit={handleSubmit}>
        <input placeholder="Writing..." onChange={handleChange} className="taskInput" value={title} />
        <input 
          onClick={handleSubmit}
          type="submit"
          value="Task"
          className="buttonTask"
          
        />
      
      </form> 

        <div className="taskContainer">
            {tasks.map((item) => (
              <Task  key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/> 
            ))}
        </div>
    </div>
    
  );
}

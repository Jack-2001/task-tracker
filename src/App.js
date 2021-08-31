import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  // hardcoding the task list
  const [tasks,setTasks]=useState([
    {
        id : 1,
        text : 'SPM assignment',
        day : '1st July at 9:00 pm',
        reminder : true
    },
    {
        id : 2,
        text : 'ML assignment',
        day : '4th July at 9:00 pm',
        reminder : true
    },
    {
        id : 3,
        text : 'HBM assignment',
        day : '2nd July at 9:00 pm',
        reminder : false
    },
])
//boolean for form
const [formtoggle,setformtoggle]=useState(false)
// function to add a task
const add_task = (new_text,new_day,new_reminder) => {
  let new_id=tasks[tasks.length-1].id+1;
  let new_task={
    id: new_id,
    text: new_text,
    day: new_day,
    reminder: new_reminder

  }
  setTasks([...tasks,new_task])
}
//function to delete a task

const delete_task = (id) => {
  // console.log(id)
  setTasks(tasks.filter((task)=>task.id!==id))
}

// Toggle reminder
const toggle_rem = (id) => {
  // console.log(id)
  setTasks(tasks.map((task)=> task.id===id?{...task,reminder:!task.reminder}:task ))
}
  return (
    <div className='container'>
      <Header title='Jack tasks' onToggle={()=>setformtoggle(!formtoggle)} btnval={formtoggle}/>
      {formtoggle && <AddTask onAdd={add_task}/>}
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={delete_task} onToggle={toggle_rem} /> : <h4>No Tasks</h4>}
    </div>
  );
}

export default App;

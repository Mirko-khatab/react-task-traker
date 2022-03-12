import{useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks,settask]=useState([
    {
        id:1,
        title:"fnish tailwindcss course ",
        completed:true
    },
    {
        id:2,
        title:"fnish php course ",
        completed:true
    },
    {
        id:3,
        title:"fnish react course  ",
        completed:false
    },
])

const ondelete = (id) => {
 settask(tasks.filter(task=>task.id!==id))
}
const ontogle = (id) => {
  settask(tasks.map((task)=>task.id === id ?
  {...task,completed:!task.completed}:task))
}
  return (
    <div className="container">
      <Header />
     {tasks.length>0 ?<Tasks Tasks={tasks} onevent={ondelete} Ontogle={ontogle}/>:<h3>No Task To Do </h3>}
    </div>
  );
}



export default App;

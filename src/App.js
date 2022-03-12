import{useState} from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
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
const [onadd,setonadd]=useState(false);
//Add tasks to
const addTask=(task)=>{
  const id=Math.floor(Math.random()*10000)+1;
const newtask={id,...task}
settask([...tasks,newtask])
}

const ondelete = (id) => {
 settask(tasks.filter(task=>task.id!==id))
}
const ontogle = (id) => {
  settask(tasks.map((task)=>task.id === id ?
  {...task,completed:!task.completed}:task))
}
  return (
    <div className="container">
      <Header onadd={()=>setonadd(!onadd)} showadd={onadd}/>
      {onadd &&<AddTask onadd={addTask}/>}
     {tasks.length>0 ?<Tasks Tasks={tasks} onevent={ondelete} Ontogle={ontogle}/>:<h3>No Task To Do </h3>}
    </div>
  );
}



export default App;

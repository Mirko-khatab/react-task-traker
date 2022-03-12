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

  return (
    <div className="container">
      <Header />
      <Tasks Tasks={tasks} onevent={ondelete}/>
    </div>
  );
}



export default App;

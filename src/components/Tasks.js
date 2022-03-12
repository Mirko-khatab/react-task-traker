import Task from './Task'
const Tasks = ({Tasks , onevent , Ontogle}) => {

  return (
    <>
    {Tasks.map(task=>(
        <Task key={task.id}  task={task} event={onevent} Ontogle={Ontogle}/>
    ))
        
    
    
    
    }
    
    </>
  )
}

export default Tasks

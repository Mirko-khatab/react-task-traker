import Task from './Task'
const Tasks = ({Tasks , onevent}) => {

  return (
    <>
    {Tasks.map(task=>(
        <Task key={task.id}  task={task} event={onevent}/>
    ))
        
    
    
    
    }
    
    </>
  )
}

export default Tasks

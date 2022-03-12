import { FaTimes } from 'react-icons/fa'
const Task = ({task ,event ,Ontogle}) => {
  return (
      <div className={`task ${task.completed? 'reminder':''}`} onDoubleClick={()=>Ontogle(task.id)}>
          <h3>{task.id} <FaTimes style={{color:'red' ,course:'pointer'}} onClick={()=>event(task.id)} /></h3>
          <p>{task.title}</p>
      </div>
  )
}

export default Task

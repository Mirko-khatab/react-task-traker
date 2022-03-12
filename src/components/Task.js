import { FaTimes } from 'react-icons/fa'
const Task = ({task ,event}) => {
  return (
      <div className="task">
          <h3>{task.id} <FaTimes style={{color:'red'}} onClick={()=>event(task.id)} /></h3>
          <p>{task.title}</p>
      </div>
  )
}

export default Task

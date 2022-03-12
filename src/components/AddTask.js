import {useState} from 'react'
const AddTask = ({onadd}) => {
    const [title,settask]=useState('')
    const [completed,setcomplet]=useState(false)
    const onsubmit = (e) => {
        e.preventDefault()
    if(!title){
        alert('Please Enter Task')
        return
    }else{
        onadd({title,completed})
        settask('')
        setcomplet(false)
    }

    }
  
  return (
    <form className="add-form" onSubmit={onsubmit}>
        <div className="form-control">
            <label>Title</label>
        <input type="text" placeholder="Add task" value={title} onChange={(e)=>settask(e.target.value)} />
        </div>
        <div className="form-control form-control-check">
            <label>completed</label>
        <input type="checkbox" checked={completed} value={completed} onChange={(e)=>setcomplet(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  )
}

export default AddTask

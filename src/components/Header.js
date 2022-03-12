import PropTypes from 'prop-types'
import Button from "./Button"
const header = ({title ,onadd , showadd}) => {
  return (
    <div className="header">
   <h2>{title}</h2>
   <Button background='green' value={showadd ?'Close':'Add Task'} onadd={onadd} showadd={showadd}/>
    </div>
  )
}
// default title for header
header.defaultProps = {
    title: "Task Tracker"
}
//datetype for header
header.propTypes = {
    title: PropTypes.string.isRequired
}

export default header

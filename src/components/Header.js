import PropTypes from 'prop-types'
import Button from "./Button"
const header = ({title}) => {
  return (
    <div className="header">
   <h2>{title}</h2>
   <Button background='green' value='Add Task'/>
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

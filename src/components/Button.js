const Button = ({background , value}) => {
  return  <button className="btn" style={{background}}>{value}</button>
  
}
//default value for button
Button.defaultProps = {
    background: 'green',
    value: 'Add Task'
}

export default Button

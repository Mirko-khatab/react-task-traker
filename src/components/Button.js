const Button = ({background , value , onadd , showadd}) => {
  
  return  <button className="btn" style={{background:showadd?'red':'green'}} onClick={onadd}>{value}</button>
  
}
//default value for button
Button.defaultProps = {
    background: 'green',
    value: 'Add Task'
}

export default Button

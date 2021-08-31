import {FaTimes} from 'react-icons/fa'
const Task = (props) => {
    const icon_style={
        color: 'red',
        cursor: 'pointer',
    }
    return (
        <div className={`task ${props.task.reminder? 'reminder':''}`} onDoubleClick={() => props.onToggle(props.task.id) } >
            <h3>{props.task.text} <FaTimes style={icon_style} onClick={() => props.onDelete(props.task.id) }/></h3>
            <p>{props.task.day}</p>
        </div>
    )
}
export default Task

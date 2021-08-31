import React from 'react'

const Button = (props) => {
 
const css_obj={
    backgroundColor: props.color,
}

    return (
        <div>
             <button onClick={props.onClick} style={css_obj} className='btn'>{props.value}</button>
        </div>
    )
}
Button.defaultProps={
    value: 'Button',
    color: 'Blue',
}
export default Button

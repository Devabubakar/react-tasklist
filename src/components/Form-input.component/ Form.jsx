import React from 'react'
import './Form.styles.css'

const  Form = ({handleChange,type,...otherProps}) => {
    return (
        <div className='form-control'>
            <input type={type} {...otherProps} onChange={handleChange}/>
            <button type="submit" className="btn">Add Task</button>
            
            
        </div>
    )
}

export default  Form

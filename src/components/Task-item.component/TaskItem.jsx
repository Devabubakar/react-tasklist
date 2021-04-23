import React from 'react';
import { FaTimes } from 'react-icons/fa';

const TaskItem = ({task,onDelete}) => {
  return (
    <div className='task reminder '>
      <h3>
        {task}{' '}
        <FaTimes onClick={()=> console.log(onDelete(task))} style={{color:'red', cursor:'pointer'}} />
      </h3>
      
    </div>
    

  );
};

export default TaskItem;

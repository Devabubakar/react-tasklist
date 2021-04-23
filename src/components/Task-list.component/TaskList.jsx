import React from 'react';
import './TaskList.styles.css';
import '../Task-item.component/TaskItem';
import TaskItem from '../Task-item.component/TaskItem';

const TaskList = (props) => {
  return (
    <div className=''>
      {props.tasks.map((task,index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;

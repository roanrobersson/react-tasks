import React from 'react';
import './task.css';

const Task = ({task, onTaskToggle, onTaskDelete}) => {
    const taskClass = (task.pending) ? 'pending' : 'done';

    return (
        <div className={'task ' + taskClass} onClick={() => onTaskToggle(task)}>
            <div className="task-header">
                <div className={'task-delete-button ' + taskClass}
                    onClick={(e) => onTaskDelete(task, e)}>
                    x
                </div>
            </div>
            <div className="task-body">
                <span className={'task-text ' + taskClass}>{task.text}</span>
            </div>
        </div>
    );
};

export default Task;
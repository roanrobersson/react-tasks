import React from 'react';
import './taskGrid.css';
import Task from '../Task';

const TaskGrid = ({tasks, onTaskToggle, onTaskDelete}) => { 
    return (
        <div className ="task-grid">
            {tasks.map((task, i) => (
                <Task task={task} key={i} 
                    onTaskToggle={onTaskToggle} onTaskDelete={onTaskDelete}>
                </Task>
            ))}
            {tasks.length === 0 && (
                <span className="no-tasks-message">No task for today :)</span>
            )}
        </div>
    );
};

export default TaskGrid;

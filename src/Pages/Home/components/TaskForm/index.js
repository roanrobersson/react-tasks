import React from 'react';
import './style.css';

const TaskForm = ({text, onChange, onSubmit}) => {
    const buttonStatusClass = (text === '') ? 'disabled' : '';

    return (
        <div className="task-form-container">
            <form className="task-form" onSubmit={onSubmit}>
                <input className="task-form-input" type="text" 
                    placeholder="New task?" maxLength="43" 
                    value={text} onChange={onChange}>
                </input>
                <button className={'task-form-button ' + buttonStatusClass}>+</button>
            </form>
        </div>
    );
};

export default TaskForm;
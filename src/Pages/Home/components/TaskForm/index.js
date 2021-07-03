import {React, useState} from 'react';
import './style.css';

const TaskForm = ({onSubmit}) => {
    const [textInput, setTextInput] = useState("");

    const handleInputChange = (e) => {
        setTextInput(e.target.value);
    };

    return (
        <div className="task-form-container">
            <form className="task-form" onSubmit={(e) => onSubmit(textInput, e)}>
                <input className="task-form-input" type="text" 
                    placeholder="New task?" maxLength="43" 
                    value={textInput} onChange={handleInputChange}>
                </input>
                <button className="task-form-button">+</button>
            </form>
        </div>
    );
};

export default TaskForm;
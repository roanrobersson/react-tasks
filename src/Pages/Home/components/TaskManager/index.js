import React, {useState} from 'react';
import './taskManager.css';
import TaskGrid from '../TaskGrid';
import TaskForm from '../TaskForm';

const TaskManager = () => {
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = new useState([
        {text: 'Task1', pending: true},
        {text: 'Task2', pending: true},
        {text: 'Task3', pending: false},
        {text: 'Task4', pending: true},
    ]);

    const handleTaskToggle = (task) => {
        const updatedTasks = tasks.map((t) => {
            if (t === task) {
                return {...t, pending: !t.pending}
            }
            return t;
        });
        setTasks(updatedTasks);
    };

    const handleTaskDelete = (task, e) => {
        e.stopPropagation()
        const updatedTasks = tasks.filter((t) => t !== task);
        setTasks(updatedTasks);
    };

    const handleTaskFormChange = (e) => {
        setInputText(e.target.value);
    };

    const handleTaskFormSubmit = (e) => {
        e.preventDefault();
        let formatedText = inputText.trim();
        if(formatedText === '') return;
        for(const t of tasks) {
            if (t.text === formatedText) return;
        };
        const updatedTasks = [{
            text: formatedText, 
            pending: true
        }, ...tasks.slice()];
        setTasks(updatedTasks);
        setInputText('');
    };

    return (
        <div>
            <TaskForm text={inputText} onChange={handleTaskFormChange} onSubmit={handleTaskFormSubmit}/>
            <TaskGrid tasks={tasks} onTaskToggle={handleTaskToggle} onTaskDelete={handleTaskDelete}/>
        </div>
    );
};

export default TaskManager;
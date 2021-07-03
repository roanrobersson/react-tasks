import React, {useState} from 'react';
import './home.css';
import TaskGrid from './components/TaskGrid';
import TaskForm from './components/TaskForm';

const Home = () => { 
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

    const handleFormSubmit = (textInput, e) => {
        e.preventDefault();
        for(const t of tasks) {
            if (t.text === textInput) return;
        };
        const updatedTasks = tasks.slice()
        updatedTasks.push({
            text: textInput, 
            pending: true
        });
        setTasks(updatedTasks);
    };

    return (
        <>
            <TaskForm onSubmit={handleFormSubmit}/>
            <TaskGrid tasks={tasks} onTaskToggle={handleTaskToggle} onTaskDelete={handleTaskDelete}/>
        </>
    );
};

export default Home;
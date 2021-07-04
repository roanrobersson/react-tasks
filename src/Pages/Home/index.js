import React from 'react';
import './home.css';
import TaskManager from './components/TaskManager';

const Home = () => {

    return (
        <div>
            <div className="header">
                <h1 className="header-title">Tasks</h1>
            </div>
            <TaskManager />
        </div>
    )
};

export default Home;
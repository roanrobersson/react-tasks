import React from 'react';
import './progressBar.css';

const ProgressBar = ({progress}) => {
    return (
        <div className="progress-container">
            <div className="progress">
                <span className="progress-text">{progress}%</span>
                <div className="progress-bar" style={{width: progress + '%'}}></div>
            </div>
        </div>
    )
};

export default ProgressBar;
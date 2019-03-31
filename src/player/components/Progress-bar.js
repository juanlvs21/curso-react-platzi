import React from 'react';
import './Progress-bar.css';

function ProgressBar(props) {
    return (
        <div className="ProgressBar">
            <input 
                type="range"
                min={0}
                max={props.duration}
                value={props.value} 
                onChange={props.handleProgressChange}
            />
        </div>
    )
}

export default ProgressBar;
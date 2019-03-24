import React from 'react';
import VolumeIcon from '../../icons/components/Volume';
import './Volume.css';

function Volume(props) {
    return (
        <button className="Volume">
            <VolumeIcon
                size={25}
                color="white"
            />
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleVolumeChange}
                />
            </div>
        </button>
    )
}

export default Volume;
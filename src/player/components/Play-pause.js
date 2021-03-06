import React from 'react';
import Play from '../../icons/components/Play';
import Pause from '../../icons/components/Pause';
import './Play-pause.css';

function PlayPause(props)  {
    return(
        <div className="PlayPause">
            {
                props.pause ?
                    <button onClick={props.handleClick}>
                        <Play size={25} color="white" />
                    </button>
                :
                    <button onClick={props.handleClick}>
                        <Pause size={25} color="white" />
                    </button>
            }
        </div>
    ) 
}

export default PlayPause;

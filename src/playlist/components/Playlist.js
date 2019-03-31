import React from 'react';
import MediaContainer from '../containers/Media-container'
import './Playlist.css'

function Playlist(props){
        return (
            <div className="Playlist">
                {
                    props.playlist.map( (mediaId) => {
                        return (
                            <MediaContainer 
                                key={mediaId}
                                id={mediaId}
                                openModal={props.handleOpenModal}
                            />
                        )
                    })
                }
            </div>
        );
}

export default Playlist;

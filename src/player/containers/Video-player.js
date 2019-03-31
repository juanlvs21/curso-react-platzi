import React, { Component } from 'react';
import VideoPlayerLayout from '../components/Video-player-layout';
import Video from '../components/Video';
import Title from '../components/Title';
import Controls from '../components/Video-player-controls';
import PlayPause from '../components/Play-pause';
import Timer from '../components/Timer';
import ProgressBar from '../components/Progress-bar';
import Spinner from '../components/Spinner';
import Volume from '../components/Volume';
import FullScreen from '../components/Full-screen';

// Import connect React-Redux
import { connect } from 'react-redux';

class VideoPlayer extends Component {

    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    leftPad(number) {
        const pad = '00';
        return pad.substring(0, pad.length - number.length) + number;
    }
    
    formattedTime(secs) {
        const minutes = parseInt(secs / 60, 10)
        const seconds = parseInt(secs % 60, 10)
        return `${this.leftPad(minutes.toString())}:${this.leftPad(seconds.toString())}`
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value
    }

    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) { //webkitIsFullScreen solo funcion en google chrome
            this.player.webkitRequestFullscreen()
        } else {
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef} > 
                <Title 
                    title={this.props.media.get('title')}
                />
                <Controls>
                    <PlayPause 
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.formattedTime(this.state.duration)}
                        currentTime={this.formattedTime(this.state.currentTime)}
                    />
                    <ProgressBar 
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume
                        handleVolumeChange={this.handleVolumeChange}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video 
                    src={this.props.media.get('src')}
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        media: state.get('data').get('entities').get('media').get(props.id)
    }
}

export default connect(mapStateToProps)(VideoPlayer);

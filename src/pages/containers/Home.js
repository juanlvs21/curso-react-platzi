import React, { Component } from 'react';
import HomeLayout from '../components/Home-layout';
import Related from '../components/Related';
import Categories from '../../categories/components/Categories';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/Handle-error';
import VideoPlayer from '../../player/containers/Video-player';

class Home extends Component {
    state = {
        modalVisible: false
    }

    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                    categories={this.props.data.categories}
                    handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer 
                                    autoplay
                                    src={this.state.media.src} 
                                    title={this.state.media.title} 
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home;

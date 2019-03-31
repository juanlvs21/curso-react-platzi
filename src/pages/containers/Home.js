import React, { Component } from 'react';
import HomeLayout from '../components/Home-layout';
import Related from '../components/Related';
import Categories from '../../categories/components/Categories';
import ModalContainer from '../../widgets/containers/ModalContainer';
import Modal from '../../widgets/components/Modal';
import HandleError from '../../error/containers/Handle-error';
import VideoPlayer from '../../player/containers/Video-player';

// Import connect React-Redux
import { connect } from 'react-redux';

// Import bindActionCreators Redux
import { bindActionCreators } from 'redux';

// Import Actions
import * as actions from '../../actions/index';

// Import List Immutable
import { List as list } from 'immutable';

class Home extends Component {
    // state = {
    //     modalVisible: false
    // }

    handleOpenModal = (id) => {
        // this.setState({
        //     modalVisible: true,
        //     media
        // })
        this.props.actions.openModal(id)
    }
    
    handleCloseModal = (event) => {
        // this.setState({
        //     modalVisible: false
        // })
        this.props.actions.closeModal()
    }

    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories
                    categories={this.props.categories}
                    handleOpenModal={this.handleOpenModal}
                    search={this.props.search}
                    isLoading={this.props.isLoading}
                    />
                    {
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer 
                                    autoplay
                                    id={this.props.modal.get('mediaId')}
                                    // src={this.state.media.src} 
                                    // title={this.state.media.title} 
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

function mapStateToProps(state,props){
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })

    let searchResults = list();
    const search = state.get('data').get('search');

    if (search) {
        const mediaList = state.get('data').get('entities').get('media');
        searchResults = mediaList.filter((item) => {
            if (item.get('author').toLowerCase().includes(search.toLowerCase())   ) {
                return item.get('author').toLowerCase().includes(search.toLowerCase())                
            }else if (item.get('title').toLowerCase().includes(search.toLowerCase()) ) {
                return item.get('title').toLowerCase().includes(search.toLowerCase())                
            }else {
                return false;
            }
        }).toList();
    }

    return {
        categories: categories,
        search: searchResults,
        modal: state.get('modal'),
        isLoading: state.get('isLoading').get('active')
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(acciones, dispatch)
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Media from '../components/Media';

// Import openModal Actions
import { openModal } from '../../actions/index';

class mediaContainer extends Component {

    openModal = (id) => {
        this.props.dispatch(openModal(id))
    }

    render(){
        return <Media openModal={this.openModal} {...this.props.data.toJS()} />
    }
}

function mapStateToProps(state, props) {
    return {
        data: state.get('data').get('entities').get('media').get(props.id)
    }
}

export default connect(mapStateToProps)(mediaContainer);
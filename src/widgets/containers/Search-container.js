import React, { Component } from 'react';
import Search from '../components/Search.js';

// Import connect React-Redux
import { connect } from 'react-redux';

// Import bindActionCreators Redux
import { bindActionCreators } from 'redux';

// Import openModal Actions
import * as actions from '../../actions/index';

class SearchContainer extends Component {

    state = {
        value: ''
      }
      handleSubmit = event => {
        event.preventDefault();
        // Aqui pueden ir las llamadas asincronas a apis
        this.props.actions.searchAsyncEntities(this.input.value);
      }
      setInputRef = element => {
        this.input = element;
      }
      handleInputChange = event => {
        this.setState({
          value: event.target.value 
        })
      }
      
      render() {
        return (
          <Search
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleInputChange}
            value={this.state.value}
          />
        )
      }
}
function mapDispatchToProps(dispatch) {
  return {
      // actions: bindActionCreators(acciones, dispatch)
      actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);

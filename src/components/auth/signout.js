import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
  componentWillMount(){
    this.props.signoutUser(); //immmiediatly signout when this page renders
  }
  render(){
    return <div>Sorry to see you go..</div>
  }
}

// function mapStateToProps(state){
//
// }

export default connect(null, actions)(Signout)

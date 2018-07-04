import React, {Component} from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Header from './Header'
import User from "./User";

class UsersIndex extends Component{
	render(){
		return(
			<div>
			<Header/>
			{this.props.users.map(user => (
          <div key={user.id}>
          <User key={user.id} user={user} />
           
          </div>
        ))}
			</div>)
	}
}

const mapStateToProps = state => {
  return {
    users: state
  };
};
export default connect(mapStateToProps)(UsersIndex);


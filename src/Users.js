import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Header from "./Header";
import User from "./User";
import EditComponent from "./EditComponent";

class UsersIndex extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {this.props.users.map(user => (
              <div key={user.id} className=" col-md-4 col-sm-6 col-12">
                {user.editing ? (
                  <EditComponent user={user} key={user.id} />
                ) : (
                  <User key={user.id} user={user} />
                )}
              </div>
            ))}

            <div className=" col-md-4 col-sm-6 col-12">
              <div className="cards">
                <Link to="/users/new">
                  <div className="boxed textAlignCenter padding25">
                    <i className="fa fa-plus fa-2x" aria-hidden="true" />
                    <p>Add Family Member</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state
  };
};
export default connect(mapStateToProps)(UsersIndex);

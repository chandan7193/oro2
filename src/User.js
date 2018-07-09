import React, { Component } from "react";

import { connect } from "react-redux";

class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="cards">
        <div className="card-body boxed">
          <div className="float_right">
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "EDIT_USER",
                  id: this.props.user.id
                })
              }
              className="btn btn-link colorccc">
              Edit
            </button>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_USER",
                  id: this.props.user.id
                })
              }
              className="btn btn-link colorccc">
              Delete
            </button>
          </div>
          <br />

          <br />
          <div className="content">
            <div className="inline-img">
              <img
                src="https://dummyimage.com/400x400/000/fff"
                className="rounded-img"
              />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="inline-text">
              <span>{this.props.user.name}</span>
              <br />
              <span>{this.props.user.email}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(User);

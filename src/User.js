import React, { Component } from "react";

import { connect } from "react-redux";

class User extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <p>{this.props.user.email}</p>
        <button
          onClick={() =>
            this.props.dispatch({ type: "EDIT_USER", id: this.props.user.id })
          }>
          Edit
        </button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "DELETE_USER", id: this.props.user.id })
          }>
          Delete
        </button>
      </div>
    );
  }
}
export default connect()(User);

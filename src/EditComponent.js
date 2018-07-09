import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newName = this.getName.value;
    const newEmail = this.getEmail.value;
    const newFacebook = this.getFacebook.value;
    const newTwitter = this.getTwitter.value;
    const newLinkedIn = this.getLinkedIn.value;
    const data = {
      newName,
      newEmail,
      newFacebook,
      newTwitter,
      newLinkedIn
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.user.id, data: data });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <label className="labelling">Name</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getName = input)}
                  className="form-control"
                  defaultValue={this.props.user.name}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <label className="labelling">Email</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getEmail = input)}
                  defaultValue={this.props.user.email}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <label className="labelling">Facebook</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getFacebook = input)}
                  className="form-control"
                  defaultValue={this.props.user.facebook}
                />
              </div>

              <div className="col-md-4 col-12">
                <label className="labelling">Twitter</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getTwitter = input)}
                  className="form-control"
                  defaultValue={this.props.user.twitter}
                />
              </div>

              <div className="col-md-4 col-12">
                <label className="labelling">LinkedIn</label>
                <br />
                <input
                  required
                  type="text"
                  ref={input => (this.getLinkedIn = input)}
                  className="form-control"
                  defaultValue={this.props.user.linkedin}
                />
              </div>
            </div>

            <br />
            <br />
            <div className="float-right">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "150px", backgroundColor: "#4397FF" }}>
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default connect()(EditComponent);

import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Header from "./Header";

class UsersNew extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const name = this.getName.value;
    const email = this.getEmail.value;
    const facebook = this.getFacebook.value;
    const twitter = this.getTwitter.value;
    const linkedin = this.getLinkedIn.value;

    const data = {
      id: new Date(),
      name,
      email,
      facebook,
      twitter,
      linkedin,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_USER",
      data
    });

    this.getName.value = "";
    this.getEmail.value = "";
    this.getFacebook.value = "";
    this.getTwitter.value = "";
    this.getLinkedIn.value = "";
  };

  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-md-2 col-6">
            <div className="halfrounded">
              <p style={{ marginTop: "1rem", backgroundColor: "#D6E9FF" }}>
                Personal Info
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
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
                Save
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link
                to="/"
                className="btn btn-primary"
                style={{ width: "150px", backgroundColor: "#4397FF" }}>
                Next
              </Link>
            </div>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default connect()(UsersNew);

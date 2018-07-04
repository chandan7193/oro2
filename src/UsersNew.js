import React, {Component} from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import Header from './Header'

class UsersNew extends Component{
	handleSubmit = e =>{
		e.preventDefault();
		const name = this.getName.value;
    	const email = this.getEmail.value;
    	const facebook =  this.getFacebook.value;
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
	    console.log('data',data);
	}

	render(){
		console.log("success")
		return(
			<div>
			<Header/>
			<div className="container">
			<h1>Create Post</h1>
	        <form onSubmit={this.handleSubmit}>
	        <div className="row">
              <div className="col-md-3">
	          <input
	            required
	            type="text"
	            ref={input => (this.getName = input)}
	            placeholder="Name"
	          />
	          </div>
            </div>
            <div className="row">
              <div className="col-md-3">
	          <input
	            required
	            type="text"
	            ref={input => (this.getEmail = input)}
	            placeholder="Email"
	          />
	          </div>
            </div>
            <div className="row">
              <div className="col-md-3">
	          <input
	            required
	            type="text"
	            ref={input => (this.getFacebook = input)}
	            placeholder="Facebook"
	          />
	          </div>
            </div>
	          
	         <div className="row">
              <div className="col-md-3">
	          <input
	            required
	            type="text"
	            ref={input => (this.getTwitter = input)}
	            placeholder="Twitter"
	          />
	          </div>
            </div>
            <div className="row">
              <div className="col-md-3">
	          <input
	            required
	            type="text"
	            ref={input => (this.getLinkedIn = input)}
	            placeholder="LinkedIn"
	          />
	          </div>
            </div>
	          <br />
	          <br />
	          <button>Post</button>
	        </form>
	        </div>
      </div>

		)
	}
}

export default connect()(UsersNew);

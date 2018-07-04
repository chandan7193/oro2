import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import userReducer from "./reducers/userReducer";

import UsersIndex from "./Users";
import UsersNew from "./UsersNew";

const store = createStore(userReducer);

ReactDOM.render(
	<Provider store={store}>
    	<BrowserRouter>
      <div>
        <Switch>
          <Route path="/users/new" component={UsersNew} />
          <Route path="/" component={UsersIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  	</Provider>, document.getElementById("root"));

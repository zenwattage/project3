import React, { Component } from 'react';
import { } from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {

  state = {   
  };

  componentDidMount = () => {
    const isAuthenticated = window.localStorage.getItem('isAuthenticated');

    if(isAuthenticated) {

    }
  };

  handleSubmit = event => {
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };
    render() {
      // JSX
      return (
          <div>
            <h1> Login Component </h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" onChange={this.handleChange} />
              <input type="password" name="password" onChange={this.handleChange} />

              <button>Login</button>
            </form>
            <p>{this.state.errorMessage}</p>
          </div>
      );
    }
}
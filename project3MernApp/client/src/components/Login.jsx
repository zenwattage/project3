import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password
      }
    })
    .then((response) => {
      console.log('Data: ', response.data); 
    })
    .catch((error) => {
      console.log('Error: ', error.response); 
    });;
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
          </div>
      );
    }
}
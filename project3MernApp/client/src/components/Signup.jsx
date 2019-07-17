import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {

  state = {
    email: "",
    password: ""
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    axios.post({
      url: "",
      method: "POST",
      data: {
        email,
        password
      }
    });
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
            <h1> I am the Signup Component </h1>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="email" onChange={this.handleChange} />
              <input type="password" name="password" onChange={this.handleChange} />

              <button>Signup</button>
            </form>
          </div>
      );
    }
}
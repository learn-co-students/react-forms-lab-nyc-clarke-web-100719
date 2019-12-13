import React from "react";

class LoginForm extends React.Component {

  state = {
    username: "",
    password: "",
    login: this.props
  }

  submitForm = (e) => {
    e.preventDefault()
    console.log(e.target)
    const handleLogin = this.props.handleLogin
    if (this.state.username != "" && this.state.password != ""){
      handleLogin({username: this.state.username, password: this.state.password})
    }
    
  }

  setUsername = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  setPassword = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.setUsername(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.setPassword(event)} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

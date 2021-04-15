import './App.css';
import React from 'react';


class App extends React.Component {
  //Declare Vairables
  username;
  password;
  isLoginSuccess;

  //Admin Credentials
  expectedUsername;
  expectedPassword;

  constructor(props) {
    super(props);

    this.state = {
      loginFlag: false
    }

    //Initialize variables
    this.username = "";
    this.password = "";
    this.isLoginSuccess = false;


    this.expectedUsername = "admin";
    this.expectedPassword = "qwerty1234";
  }


  render() {
    return (
      <div className="App">
        {!this.state.loginFlag ? this.renderLogin() : this.isLoginSuccess ? this.renderLoginSuccessful() : this.renderLoginFailed()}
      </div>
    );
  }


  //Function handles when the form is submitted
  mySubmitHandler = (event) => {
    try {
      event.preventDefault();
      
      //Check the credentials
      if(this.username === this.expectedUsername && this.password === this.expectedPassword)
        this.isLoginSuccess = true;
      else
        this.isLoginSuccess = false;

      this.setState({
        loginFlag: true
      });

    } catch (error) {
      console.error('mySubmitHandler error:', error);
    }
  }


  //Function handles when username is entered
  usernameChange = (event) => {
    try {
      this.username = event.target.value;
    } catch (error) {
      console.error('usernameChange error:', error);
    }
  }



  //Function handles when password is entered
  passwordChange = (event) => {
    try {
      this.password = event.target.value;
    } catch (error) {
      console.error('passwordChange error:', error);
    }
  }



  //Function render signin page
  renderLogin() {
    return (
      <>
        <div className="Title">Welcome to Simple Web App Project</div>
        <div className="Subtitle">Login using your credentials</div>

        <form onSubmit={event => this.mySubmitHandler(event)}>
          <label className="Username">Username:</label><br />
          <input className="UsernameInput" type="text" onChange={(event) => this.usernameChange(event)}></input><br />

          <label className="Password">Password:</label><br />
          <input className="PasswordInput" type="password" onChange={event => this.passwordChange(event)}></input><br />

          <input type="submit" className="SubmitButton"/>
        </form>
      </>
    );
  }



  renderLoginSuccessful() {
    return (
      <>
        <div className="Title">Login Successful!!</div>
      </>
    );
  }



  renderLoginFailed() {
    return (
      <>
        <div className="Title">Login Failed!!</div>
      </>
    );
  }
}

export default App;
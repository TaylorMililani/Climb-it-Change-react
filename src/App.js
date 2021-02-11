import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
import config from './config.json'
import NewUserForm from './components/NewUserForm';
import Workouts from './components/Workouts';
// import Login from './components/Login';
import Logout from './components/Logout';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      user: null,
      token: '',
    }
  }

  message = this.user ? `${this.user.name}` : 'no one logged in'

    onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        axios.post(`${BASE_URL}/login`, res.profileObj)
        .then(r => {
          this.setState({isAuthenticated: true, user: res.profileObj, token: r["access token"]})
          console.log(r.data)
        })
        .catch(error => {
          console.log(error.data)
        })
    }

    onFailure = (res) => {
        console.log('[Login Failed] res:', res)
    }

    // return (
    //     <div>
    //         <GoogleLogin 
    //             clientId={props.clientId}
    //             buttonText="Login"
    //             onSuccess={onSuccess}
    //             onFailure={onFailure}
    //             cookiePolicy={'single-host-origin'}
    //             isSignedIn={true}
    //         />
    //     </div>
    // )


  // message = isSignedIn ? `${}` : 'no one logged in'
  
  // logout = () => {
  //   this.setState({
  //     isAuthenticated: false,
  //     user: null,
  //     token: '',
  //     message: 'no one logged in'
  //   })
  // }

  // googleResponse = (response) => {
  //   const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type: 'application/json'});
  //   const options = {
  //     method: 'POST',
  //     body: tokenBlob,
  //     mode: 'cors',
  //     cache: 'default'
  //   }
  //   fetch(`${BASE_URL}/login/callback`, options).then(r => {
  //     if (r.headers.get('Content-Type') === 'text/html; charset=utf-8') {
  //       console.log('error')
  //       return 
  //     }
  //     const token = r.headers.get('x-auth-token')
  //     r.json().then(user => {
  //       if (token) {
  //         this.setState({isAuthenticated: true, user, token, message: `${user.name}`})
  //         console.log(token)
  //       }
  //     });
  //   })
  // }

  // onFailure = (error) => {
  //   alert(error.data)
  // } 

  // setLevel = {
  //   axios.patch()
  // }
  
  // content = this.isAuthenticated ? <p>{this.user.name}</p> : "no one logged in"

  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Climb-it Change</h1>
          <h3>An app for climbers who want to up their sends</h3>
          <h4>{this.message}</h4>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/workouts">Workouts</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
        <body>
          <Switch>
            <Route path='/login'>
              <GoogleLogin
                clientId={config.GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                // cookiePolicy={'single-host-origin'}
              />
              {/* // <Login clientId={config.GOOGLE_CLIENT_ID}/> */}
            </Route>
            <Route path='/new-user-form'>
              <NewUserForm url={BASE_URL}/>
            </Route>
            <Route path='/workouts'>
              <Workouts url={BASE_URL}/>
            </Route>
            {/* <Route path='/dashboard'>
              <DashBoard url={BASE_URL}/>
            </Route>
            <Route>
              <Users url={BASE_URL} />
            </Route> */}
          </Switch>
        </body>
      </div>
    </Router>
    )
  }
}


export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import config from './config.json'
import NewUserForm from './components/NewUserForm';
import Workouts from './components/Workouts';
import  GoogleLogin  from 'react-google-login';
import  GoogleLogout  from 'react-google-login';
import axios from 'axios';
import Calendar from './components/Calendar'
import Users from './components/Users'
import Plan from './components/Plan'
import Dashboard from './components/Dashboard'
import Homepage from './components/Homepage'

let BASE_URL = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:5000';
} else {
  BASE_URL = 'https://climb-it-change.herokuapp.com';
  console.log(BASE_URL)
}
function App () {
  const [user, setUser] = useState(null)
  // const [workoutCount, setWorkoutCount] = useState([0])
  // const [seshCount, setSeshCount] = useState([0])
  // const [antCount, setAntCount] = useState([0])

  // const addToWorkoutCount = () => {
  //    // when a workout is checked off, increase workout count.
  // }

  // const addToSeshCount = () => {

  // }

  // const addToAntCount = () => {

  // }
  
  
 
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    const data = {
      id_token: res.getAuthResponse().id_token,
      name: res.profileObj.name,
      email: res.profileObj.email
    }
    axios.post(`${BASE_URL}/login`, { data: data })
    .then(r => {
      console.log(r.data)
      axios.post(`${BASE_URL}/api/user-data`, { data: data })
      .then(res => {
        console.log(res.data)
        setUser(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    })
    .catch(error => {
      console.log(error.data)
    })
    refreshTokenSetup(res);
  }

  const onFailure = (res) => {
      console.log('[Login Failed] res:', res)
  }

  const onLogoutSuccess = (res) => {
    setUser(null)
    alert('Successfully logged out');
    console.log("logged out")
  }

  const onLogoutFailure = (res) => {
    alert(res.data)
  }

  const refreshTokenSetup = (res) => {
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log('newAuthRes:', newAuthRes);
      console.log('new auth token', newAuthRes.id_token);
      setTimeout(refreshToken, refreshTiming);
    }
    setTimeout(refreshToken, refreshTiming)
  }

  const message = user ? `${user.name}` : 'no one logged in'
  const loginButton = 
  <GoogleLogin
    clientId={config.GOOGLE_CLIENT_ID}
    buttonText="Login"
    onSuccess={onSuccess}
    onFailure={onFailure}
    isSignedIn={true}
  // cookiePolicy={'single-host-origin'}
  />

  const logoutButton = 
  <GoogleLogout 
    clientId={config.GOOGLE_CLIENT_ID}
    buttonText="Logout"
    onSuccess={onLogoutSuccess}
    onFailure={onLogoutFailure}
    isSignedIn={false}
    />

  const nav = user ? 
  <nav className="nav">
    <ul>
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/plan">Plan</Link>
      </li>
      <li>
        <Link to="/new-user-form">Set your Level</Link>
      </li>
      <li>
        <Link to="/Calendar">Schedule</Link>
      </li>
      <li>
        <Link to="/users">users</Link>
      </li>
    </ul>
  </nav> : <p>Please log in to create an account and start climbing</p>

    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Climb-it Change</h1>
          <h3>An app for climbers who want to up their sends</h3>
          <h4>{message}</h4>
          {user ? logoutButton : loginButton}
          {nav}
        </header>
        <body>
          <Switch>
            {/* <Route path='/'>
              <Homepage />
            </Route> */}
            <Route path="/plan">
              <Plan user={user} url={BASE_URL}/>
            </Route>
            <Route path='/calendar'>
                <Calendar url={BASE_URL} user={user}/>
            </Route>
            <Route path='/workouts'>
              <Workouts url={BASE_URL}/>
            </Route>
            <Route path='/new-user-form'>
              <NewUserForm url={BASE_URL} user={user} />
            </Route>
            <Route path='/users'>
              <Users url={BASE_URL} />
            </Route>
            <Route path='/dashboard'>
              <Dashboard url={BASE_URL} user={user}/>
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
    )
  
}


export default App;

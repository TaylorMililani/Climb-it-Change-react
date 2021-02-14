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
// import Login from './components/Login';
// import Logout from './components/Logout';
import  GoogleLogin  from 'react-google-login';
import  GoogleLogout  from 'react-google-login';
import axios from 'axios';
import Calender from './components/Calender'
import Users from './components/Users'
import Plan from './components/Plan'

const BASE_URL = 'http://localhost:5000';
function App () {
  const [user, setUser] = useState(null)
  
  
  // const clientId = config.GOOGLE_CLIENT_ID
 
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser:', res.profileObj);
      const data = {
        id_token: res.getAuthResponse().id_token,
        name: res.profileObj.name,
        email: res.profileObj.email
        // imageUrl: res.profileObj.imageUrl
      }
      // setUser(data)
      axios.post(`${BASE_URL}/login`, { data: data })
      .then(r => {
        setUser(data)
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

  // const setLevel = (event) => {
  //   if (user) {
  //     user.level = event.target.value
  //     const data = {
  //       level: user.level,
  //       email: user.email
  //     }
  //     axios.patch(`${BASE_URL}/new-user-form`, { data: data })
  //     .then(res => {
  //       console.log(res.data)
  //     })
  //     .catch(error => {
  //       console.log(error.data)
  //     })
  //   }
  // }
  // if (user && (user.level === '' || user.level === undefined)) {
  //   console.log('not redirecting')
  //   return <Redirect to = {{ pathname: "/new-user-form" }} />
  // } else {
  //   console.log('condition failed')
  // }
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
    
    const content = user ? <NewUserForm url={BASE_URL} user={user} /> : <Plan />
    const content2 = user ? <Plan user={user} url={BASE_URL}/> : <Plan />
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Climb-it Change</h1>
          <h3>An app for climbers who want to up their sends</h3>
          <h4>{message}</h4>
          {user ? logoutButton : loginButton}
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
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
                <Link to="/Calender">Schedule</Link>
              </li>
              <li>
                <Link to="/users">users</Link>
              </li>
            </ul>
          </nav>
        </header>
        <body>
          <Switch>
            <Route path='/login'>
            </Route>
            <Route path="/plan">
              {content2}
            </Route>
            <Route path='/calender'>
              <Calender />
            </Route>
            <Route path='/workouts'>
              <Workouts url={BASE_URL}/>
            </Route>
            <Route path='/new-user-form'>
              {content}
            </Route>
            <Route>
              <Users url={BASE_URL} />
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
    )
  
}


export default App;

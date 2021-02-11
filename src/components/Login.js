import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
// import config from './src/config.json'

function Login(props) {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res)
    }

    return (
        <div>
            <GoogleLogin 
                clientId={props.clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single-host-origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;

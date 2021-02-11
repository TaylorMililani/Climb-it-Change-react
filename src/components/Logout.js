import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogout } from 'react-google-login';
// import config from './src/config.json'

function Logout(props) {
    const onSuccess = () => {
        alert('Successfully logged out');
    }

    return (
        <div>
            <GoogleLogout 
                clientId={props.clientId}
                buttonText="Logout"
                onSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;

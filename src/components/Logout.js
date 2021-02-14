import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogout } from 'react-google-login';
// import config from './src/config.json'

function Logout(props) {
    const onSuccess = (res) => {
      alert('Logout made successfully');
      console.log("logged out")
    };

    return (
        <div>
            <GoogleLogout
                    clientId={props.clientId}
                    buttonText = "Logout"
                    onLogoutSuccess={onSuccess}
                    />
        </div>
      
    );
  }

export default Logout;

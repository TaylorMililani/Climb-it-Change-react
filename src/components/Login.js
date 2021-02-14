// import axios from 'axios';
// import React, {useState} from 'react';
// // import ReactDOM from 'react-dom';
// import GoogleLogin from 'react-google-login';
// // import config from './src/config.json'
// // import { navigate } from "@reach/router";

// const Login = (props, { setUser }) => {
//     const onSuccess = (res) => {
//         console.log('[Login Success] currentUser:', res.profileObj);
//         const data = {
//           id_token: res.getAuthResponse().id_token,
//           name: res.profileObj.name,
//           email: res.profileObj.email,
//           imageUrl: res.profileObj.imageUrl
//         }
//         setUser(data)
//         axios.post(`${props.url}/login`, { data: data })
//         .then(r => {
//           console.log(r.data)
//           navigate(r.data)
//           setUser(data)
//         })
//         .catch(error => {
//           console.log(error.data)
//         })
//       refreshTokenSetup(res);
//     }
  
//     const onFailure = (res) => {
//         console.log('[Login Failed] res:', res)
//     }
  
//     const refreshTokenSetup = (res) => {
//       let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
//       const refreshToken = async () => {
//         const newAuthRes = await res.reloadAuthResponse();
//         refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
//         console.log('newAuthRes:', newAuthRes);
//         console.log('new auth token', newAuthRes.id_token);
//         setTimeout(refreshToken, refreshTiming);
//       }
//       setTimeout(refreshToken, refreshTiming)
//     }
    
//     return (
//         <div>
//             {/* <h1>this is some text</h1> */}
//             <GoogleLogin 
//                 clientId={props.clientId}
//                 buttonText="Login"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 // cookiePolicy={'single-host-origin'}
//                 isSignedIn={true}
//             />
//         </div>
//     )
// }

// export default Login;

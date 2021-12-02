import React from 'react';
import banner from '../../images/login.png';
import './style.css';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

LoginFeature.propTypes = {
    
};

function LoginFeature(props) {
    const history = useHistory()
    const responseSuccessGoogle = (response) => {
        console.log(response);
        fetch("http://localhost:2000/account/login-google", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({tokenId: response.tokenId})
        })
          .then(resp => resp.json())
          .then(data => {
            if (data.message) {
            } else {
              localStorage.setItem("token", data.token)
              localStorage.setItem("user", data.user)
              history.push('/logininfo')
            }
          })
        }
    const responseErrorGoogle = (response) => {
      console.log(response);
    }
    return (
        <div>
          <div id="main-body" align="center">
            <img src={banner} style={{height: '380px', width: '750px'}} /><br /><br /><br />

            <GoogleLogin
              clientId="573677176622-jpua3vd47pvuh1r7ipdj9kc3iv1bfnre.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={'single_host_origin'}
            />

            <p style={{fontSize: '15px'}}>Use student email to log in</p>
          </div>
        </div>
    );
}

export default LoginFeature;
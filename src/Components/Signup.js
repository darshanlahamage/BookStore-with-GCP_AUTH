import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import googleLogo from '../Google__G__Logo.svg.webp';
import appimage from '../apple-books-app-icon.png';
import { jwtDecode } from "jwt-decode";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignin = (CredentialResponse) => {
    const cred = jwtDecode(CredentialResponse.credential);

    if (cred) {
      console.log(cred);
      navigate('/mainscreen', { replace: true });
    }
  }

  return (
    <div className="signup-container">
      <div className="centered-container">
        <div className="app-image-container">
          <img src={appimage} alt="App Image" className="app-image" />
        </div>
        <div className="auth-section">
          <div className="google-logo">
            <img src={googleLogo} alt="Google Logo" className="google-logo" />
          </div>
          <div className="google-login">
            <GoogleOAuthProvider clientId='178873698881-2oatlpis7dsjjrmo312eutc8t1vspo47.apps.googleusercontent.com'>
              <GoogleLogin
                onSuccess={handleSignin}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;


import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { logout } = useAuth0();

  if (isAuthenticated) {
    return <button onClick={() => logout()}>Log Out</button>
  } else {
    return <button onClick={() => loginWithRedirect()}>Log In</button>
  }
};

export default LoginButton;
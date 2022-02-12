
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const LoginButton = () => {

  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  const { user } = useAuth0();

  let currentUser;

  // if (isAuthenticated) {
  //   return <button onClick={() => logout()}>Log Out</button>
  // } else {
  //   return <button onClick={() => loginWithRedirect()}>Log In</button>
  // }
  if (isAuthenticated) {
    currentUser = user.name;
  } else {
    currentUser = 'Log In'
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (currentUser === 'Log In') {
    return <button onClick={() => loginWithRedirect()}>Log In</button>
  } else {
    return (
      <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {currentUser}
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
      </div>
    );

  }

};

export default LoginButton;
import React from 'react';
import './LoginButton.scss';
import { Link } from 'react-router-dom';

const LoginButton = ({ children }) => {
  return (
    <div className="LoginButtonContainer">
      <p>
        <Link to="/">{children}</Link>
      </p>
    </div>
  );
};

export default LoginButton;

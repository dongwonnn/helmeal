import React from 'react';
import './Button.scss';

const Button = ({ children }) => {
  return (
    <div className="Button">
      <p>{children}</p>
    </div>
  );
};

export default Button;

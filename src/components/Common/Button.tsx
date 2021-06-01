import React, { FC } from 'react';
import './Button.scss';

const Button: FC = ({ children }) => {
  return (
    <div className='Button'>
      <p>{children}</p>
    </div>
  );
};

export default Button;

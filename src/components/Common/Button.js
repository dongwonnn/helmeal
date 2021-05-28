import React from 'react';
import './Button.scss';

const Button = ({ children, isSelect }) => {
  return (
    <div className={'Button' + (isSelect === undefined ? '' : ' passive')}>
      <p>{children}</p>
    </div>
  );
};

export default Button;

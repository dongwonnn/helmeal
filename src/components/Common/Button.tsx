import React, { FC } from 'react';
import { ButtonContainer } from './styles';

const Button: FC = ({ children }) => {
  return (
    <ButtonContainer>
      <p>{children}</p>
    </ButtonContainer>
  );
};

export default Button;

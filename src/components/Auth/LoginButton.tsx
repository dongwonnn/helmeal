import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../utils/data';
import { Redirect } from 'react-router';
import { Location } from 'history';
import { LoginButtonContainer } from './styles';
import { RootState } from '../../reducers';

interface LoginButtonProps {
  from?: Location;
  setGoLoginForm?: (e: boolean) => void;
}

const LoginButton: FC<LoginButtonProps> = ({
  children,
  from,
  setGoLoginForm,
}) => {
  const onClickBtn = () => {
    if (setGoLoginForm) setGoLoginForm(true);
  };

  return (
    <LoginButtonContainer>
      <p onClick={onClickBtn}>{children}</p>
    </LoginButtonContainer>
  );
};

export default LoginButton;

import React, { FC, useCallback } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from 'utils/data';
import { Location } from 'history';
import { RootState } from 'reducers';
import { LoginButtonContainer } from './styles';

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

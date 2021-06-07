import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../utils/data';
import { check } from '../../reducers/auth';
import { Redirect } from 'react-router';
import { Location } from 'history';
import { LoginButtonContainer } from './styles';
import { RootState } from '../../reducers';

interface LoginButtonProps{
  from : Location;
}

const LoginButton:FC<LoginButtonProps> = ({ children, from }) => {
  const dispatch = useDispatch();

  const { user } = useSelector(({ auth } : RootState) => ({
    user: auth.user,
  }));

  const onCheckUser = useCallback(() => {
    dispatch(check(userData))
  }, [dispatch]);

  if (user) {
    return <Redirect to={from} />;
  }

  return (
    <LoginButtonContainer>
      <p onClick={onCheckUser}>{children}</p>
    </LoginButtonContainer>
  );
};

export default LoginButton;

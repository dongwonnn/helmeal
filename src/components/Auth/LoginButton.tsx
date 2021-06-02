import React, { FC, useCallback } from 'react';
import './LoginButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../utils/data';
import { check } from '../../reducers/auth';
import { Redirect } from 'react-router';
import { Location } from 'history';

interface LoginButtonProps{
  from : Location;
}

const LoginButton:FC<LoginButtonProps> = ({ children, from }) => {
  const dispatch = useDispatch();

  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));

  const onCheckUser = useCallback(() => {
    dispatch(check(userData))
  }, [dispatch]);

  if (user) {
    return <Redirect to={from} />;
  }

  return (
    <div className="LoginButtonContainer">
      <p onClick={onCheckUser}>{children}</p>
    </div>
  );
};

export default LoginButton;
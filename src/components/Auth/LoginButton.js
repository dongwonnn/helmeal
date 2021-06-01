import React, { useCallback } from 'react';
import './LoginButton.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../../utils/data';
import { check } from '../../reducers/auth';
import { Redirect } from 'react-router';

const LoginButton = ({ children }) => {
  const dispatch = useDispatch();

  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));

  const onCheckUser = useCallback(() => {
    dispatch(check(userData));
  }, [dispatch]);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="LoginButtonContainer">
      <p onClick={onCheckUser}>{children}</p>
    </div>
  );
};

export default LoginButton;

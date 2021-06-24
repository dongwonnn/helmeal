import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../reducers/user';
import { LogoutContainer } from '../Profile/styles';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
    history.push('/');
  }, [dispatch, history]);

  return (
    <LogoutContainer onClick={onLogout}>
      <p>로그아웃</p>
    </LogoutContainer>
  );
};

export default Logout;

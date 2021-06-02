import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../../reducers/auth';

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());

    history.push('/');
  }, [dispatch, history]);

  return (
    <div className="Logout" onClick={onLogout}>
      <p>로그아웃</p>
    </div>
  );
};

export default Logout;

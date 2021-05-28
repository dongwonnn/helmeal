import React, { useEffect } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useLocation } from 'react-router';

import './ProfilePage.scss';
import NavBar from '../components/Common/NavBar';
const ProfilePage = ({ history }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="ProfilePage">
      <Header>
        <LeftIcon />
        <h3>마이페이지</h3>
        <p></p>
      </Header>
      <div className="ProfileContainer">
        <div className="ProfileMessage">
          <p>가입하고 건강한 식단을 준비하세요!</p>
        </div>

        <div className="ProfileLogin">
          <p>로그인/회원가입</p>
        </div>
      </div>
      <NavBar path={history.location.pathname} />
    </div>
  );
};

export default ProfilePage;

import React, { useEffect } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { Redirect, useLocation } from 'react-router';

import './ProfilePage.scss';
import NavBar from '../components/Common/NavBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProfilePage = ({ history }) => {
  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));

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
      {user ? (
        <div></div>
      ) : (
        <div className="ProfileContainer">
          <div className="ProfileMessage">
            <p>가입하고 건강한 식단을 준비하세요!</p>
          </div>

          <div className="ProfileLogin">
            <Link to="/login">
              <p>로그인/회원가입</p>
            </Link>
          </div>
          <div className="Divider"></div>
          <div className="Question">
            <p>문의하기</p>
          </div>
          <div className="Policies">
            <p>약관 및 정책 </p>
          </div>
        </div>
      )}
      <NavBar path={history.location.pathname} />
    </div>
  );
};

export default ProfilePage;

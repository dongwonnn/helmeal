import React, { useEffect } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useLocation } from 'react-router';

import './ProfilePage.scss';
import NavBar from '../components/Common/NavBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../components/Auth/Logout';
import OrderHistory from '../components/Profile/OrderHistory';
import Polices from '../components/Profile/Polices';
import Question from '../components/Profile/Question';
const ProfilePage = ({ history }) => {
  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!user) {
    return (
      <div className="ProfilePage">
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
          <Question />
          <Polices />
        </div>
      </div>
    );
  }

  return (
    <div className="ProfilePage">
      <Header>
        <LeftIcon />
        <h3>마이페이지</h3>
        <p></p>
      </Header>
      <div className="ProfileContainer">
        <OrderHistory />
        <Question />
        <Polices />
        <Logout />
      </div>
      <NavBar path={history.location.pathname} />
    </div>
  );
};

export default ProfilePage;

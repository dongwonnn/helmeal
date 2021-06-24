import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Header from '../components/Common/Header';
import { useHistory, useLocation } from 'react-router';

import NavBar from '../components/Common/NavBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logout from '../components/Auth/Logout';
import OrderHistory from '../components/Profile/OrderHistory';
import Polices from '../components/Profile/Polices';
import Question from '../components/Profile/Question';
import {
  Divider,
  ProfileContainer,
  ProfileLogin,
  ProfileMessage,
  ProfilePageContainer,
} from '../components/Profile/styles';
const ProfilePage = () => {
  const history = useHistory();
  const [user, setUser] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!user) {
    return (
      <ProfilePageContainer>
        <ProfileContainer>
          <ProfileMessage>
            <p>가입하고 건강한 식단을 준비하세요!</p>
          </ProfileMessage>

          <ProfileLogin>
            <Link to="/login">
              <p>로그인/회원가입</p>
            </Link>
          </ProfileLogin>
          <Divider />
          <Question />
          <Polices />
        </ProfileContainer>
      </ProfilePageContainer>
    );
  }

  return (
    <ProfilePageContainer>
      <Header pathname="/">
        <LeftIcon />
        <h3>마이페이지</h3>
        <p></p>
      </Header>
      <ProfileContainer>
        <Link to="/order-history">
          <OrderHistory />
        </Link>
        <Question />
        <Polices />
        <Logout />
      </ProfileContainer>
      <NavBar path={history.location.pathname} />
    </ProfilePageContainer>
  );
};

export default ProfilePage;

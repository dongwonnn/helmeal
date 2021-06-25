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
  ProfileMessageContainer,
  ProfilePageContainer,
  ProfileMessage,
} from '../components/Profile/styles';
import { RootState } from '../reducers';
const ProfilePage = () => {
  const history = useHistory();

  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ProfilePageContainer>
      <Header pathname="/">
        <LeftIcon />
        <h3>마이페이지</h3>
        <p></p>
      </Header>
      {user ? (
        <ProfileContainer>
          <Link to="/order-history">
            <ProfileMessage>
              <p>구독 내역</p>
            </ProfileMessage>
          </Link>
          <ProfileMessage>
            <p>문의하기 (카카오톡 채널)</p>
          </ProfileMessage>
          <ProfileMessage>
            <p>자주하는 질문</p>
          </ProfileMessage>
          <a
            href="https://www.notion.so/fe94fa076c884e50b689d10dcd16f1b6"
            target="_blank"
          >
            <ProfileMessage>
              <p>배송안내 및 환불정책</p>
            </ProfileMessage>
          </a>
          <Logout />
        </ProfileContainer>
      ) : (
        <ProfileContainer>
          <ProfileMessageContainer>
            <p>가입하고 건강한 식단을 준비하세요!</p>
          </ProfileMessageContainer>

          <ProfileLogin>
            <Link to="/login">
              <p>로그인/회원가입</p>
            </Link>
          </ProfileLogin>
          <Divider />
          <ProfileMessage>
            <p>문의하기 (카카오톡 채널)</p>
          </ProfileMessage>
          <ProfileMessage>
            <p>자주하는 질문</p>
          </ProfileMessage>
          <a
            href="https://www.notion.so/fe94fa076c884e50b689d10dcd16f1b6"
            target="_blank"
          >
            <ProfileMessage>
              <p>배송안내 및 환불정책</p>
            </ProfileMessage>
          </a>
        </ProfileContainer>
      )}
      <NavBar path={history.location.pathname} />
    </ProfilePageContainer>
  );
};

export default ProfilePage;

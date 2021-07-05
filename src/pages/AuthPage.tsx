import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { RouteComponentProps, useLocation } from 'react-router';
import TermsOfService from '../components/Profile/TermsOfService';
import { Location } from 'history';
import { StaticContext } from 'react-router';
import LoginButton from '../components/Auth/LoginButton';
import {
  AuthPageContainer,
  LogoContainer,
  LoginButtonGroup,
} from '../components/Auth/styles';

interface LocationProps {
  from: Location;
}

const AuthPage = ({
  location,
}: RouteComponentProps<{}, StaticContext, LocationProps>) => {
  const { pathname } = useLocation();
  const { from } = location.state || { from: '/profile' };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AuthPageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginButtonGroup>
        <Link to="/login">
          <LoginButton>헬밀 이메일로 로그인</LoginButton>
        </Link>
        <LoginButton from={from}>카카오톡 아이디 로그인</LoginButton>
        <LoginButton from={from}>구글 아이디 로그인</LoginButton>
        <Link to="/register">
          <LoginButton>회원가입</LoginButton>
        </Link>
        <TermsOfService />
      </LoginButtonGroup>
    </AuthPageContainer>
  );
};

export default AuthPage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { RouteComponentProps, useLocation } from 'react-router';
import TermsOfService from '../components/Profile/TermsOfService';
import { Location } from 'history';
import { StaticContext } from 'react-router';
import LoginButton from '../components/Auth/LoginButton';
import {
  LoginPageContainer,
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
    <LoginPageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginButtonGroup>
        <LoginButton>
          <Link to="/login">헬밀 이메일로 로그인</Link>
        </LoginButton>
        <LoginButton from={from}>카카오톡 아이디 로그인</LoginButton>
        <LoginButton from={from}>구글 아이디 로그인</LoginButton>
        <LoginButton>
          <Link to="/register">회원가입</Link>
        </LoginButton>
        <TermsOfService />
      </LoginButtonGroup>
    </LoginPageContainer>
  );
};

export default AuthPage;

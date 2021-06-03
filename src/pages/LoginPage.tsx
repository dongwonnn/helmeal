import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { RouteComponentProps, useLocation } from 'react-router';
import LoginButton from '../components/Auth/LoginButton';
import TermsOfService from '../components/Profile/TermsOfService';
import { Location } from 'history';
import { StaticContext } from 'react-router';
import { LoginPageContainer, LogoContainer, LoginButtonGroup } from '../components/Auth/styles';


interface LocationProps{
  from : Location;
}

const LoginPage = ({ location }:RouteComponentProps<{}, StaticContext, LocationProps>) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { from } = location.state || { from: '/profile' };

  return (
    <LoginPageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LoginButtonGroup>
        <LoginButton from={from}>카카오톡 아이디 로그인</LoginButton>
        <LoginButton from={from}>애플 아이디 로그인</LoginButton>
        <LoginButton from={from}>구글 아이디 로그인</LoginButton>
        <TermsOfService />
      </LoginButtonGroup>
    </LoginPageContainer>
  );
};

export default LoginPage;

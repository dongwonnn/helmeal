import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { RouteComponentProps, useLocation } from 'react-router';
import LoginButton from '../components/Auth/LoginButton';
import './LoginPage.scss';
import TermsOfService from '../components/Profile/TermsOfService';
import { Location } from 'history';
import { StaticContext } from 'react-router';


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
    <div className="LoginPage">
      <div className="Logo">
        <Logo />
      </div>
      <div className="LoginButtonGroup">
        <LoginButton from={from}>카카오톡 아이디 로그인</LoginButton>
        <LoginButton from={from}>애플 아이디 로그인</LoginButton>
        <LoginButton from={from}>구글 아이디 로그인</LoginButton>
        <TermsOfService />
      </div>
    </div>
  );
};

export default LoginPage;

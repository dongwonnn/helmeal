import React, { useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { useLocation } from 'react-router';
import LoginButton from '../components/Auth/LoginButton';
import './LoginPage.scss';
import TermsOfService from '../components/Profile/TermsOfService';

const LoginPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="LoginPage">
      <div className="Logo">
        <Logo />
      </div>
      <div className="LoginButtonGroup">
        <LoginButton>카카오톡 아이디 로그인</LoginButton>
        <LoginButton>애플 아이디 로그인</LoginButton>
        <LoginButton>구글 아이디 로그인</LoginButton>
        <TermsOfService />
      </div>
    </div>
  );
};

export default LoginPage;

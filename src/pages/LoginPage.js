import React from 'react';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import LoginButton from '../components/Login/LoginButton';
import TermsOfService from '../components/Login/TermsOfService';
import './LoginPage.scss';

const LoginPage = () => {
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

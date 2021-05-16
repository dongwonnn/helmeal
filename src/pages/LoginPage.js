import React from 'react';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import LoginButton from '../components/Common/LoginButton';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="LoginContainer">
      <div className="Logo">
        <Logo />
      </div>
      <div className="LoginButtonGroup">
        <LoginButton>카카오톡 아이디 로그인</LoginButton>
        <LoginButton>애플 아이디 로그인</LoginButton>
        <LoginButton>구글 아이디 로그인</LoginButton>
        <div className="TermsOfService">
          <p>
            로그인하시면 헬밀의{' '}
            <a href="https://www.notion.so/0d1cde2a6a434fc985cb9a1a7e192d2f">
              개인정보처리방침
            </a>{' '}
            및{' '}
            <a href="https://www.notion.so/0c65aea4959e43f9a9712dd7ad37f6e9">
              이용약관
            </a>
            에
            <br />
            동의하는 것으로 간주합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../reducers/auth';
import { RootState } from '../reducers';
import { useHistory } from 'react-router-dom';
import { check } from '../reducers/user';

interface LocationProps {
  from: Location;
}

const LoginPage = ({
  location,
}: RouteComponentProps<{}, StaticContext, LocationProps>) => {
  const [goLoginForm, setGoLoginForm] = useState(false);
  const { pathname } = useLocation();
  const { from } = location.state || { from: '/profile' };

  const history = useHistory();
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(
    ({ auth, user }: RootState) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    }),
  );

  const onChange = (e: any) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { userId, email, password } = form;

    dispatch(login({ userId, email, password }));
  };

  useEffect(() => {
    // 로그인 실패
    if (authError) {
      return;
    }

    // 로그인 성공 후 check로 user 인증
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, history]);

  // user 있을 경우 바로 home으로 이동
  useEffect(() => {
    if (user) {
      history.push('/');
      // 새로고침시 데이터 유지 위해
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user]);

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <LoginPageContainer>
      {!goLoginForm ? (
        <>
          <LogoContainer isloginForm={goLoginForm}>
            <Logo />
          </LogoContainer>
          <LoginButtonGroup>
            <LoginButton setGoLoginForm={setGoLoginForm}>
              헬밀 이메일로 로그인
            </LoginButton>
            <LoginButton from={from}>카카오톡 아이디 로그인</LoginButton>
            <LoginButton from={from}>애플 아이디 로그인</LoginButton>
            <LoginButton from={from}>구글 아이디 로그인</LoginButton>
            <TermsOfService />
          </LoginButtonGroup>
        </>
      ) : (
        <>
          <LogoContainer isloginForm={goLoginForm}>
            <Logo />
          </LogoContainer>
          <main className="login-main">
            <form onSubmit={onSubmit}>
              <div className="login-content">
                <input
                  name="email"
                  type="text"
                  placeholder="아이디(이메일)"
                  onChange={onChange}
                  value={form.email || ''}
                />
                <input
                  type="text"
                  name="userId"
                  placeholder="이름"
                  onChange={onChange}
                  value={form.userId || ''}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  onChange={onChange}
                  value={form.password || ''}
                />
              </div>
              <div className="login-submit">
                <button className="login-login">로그인</button>
              </div>
            </form>
          </main>
        </>
      )}
    </LoginPageContainer>
  );
};

export default LoginPage;

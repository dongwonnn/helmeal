import React, { useEffect } from 'react';
import {
  AuthPageContainer,
  InputContainer,
  LogoContainer,
} from '../components/Auth/styles';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { changeFieldLogin, initializeLoginForm, login } from '../reducers/auth';
import Button from '../components/Common/Button';
import { check } from '../reducers/user';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
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

  // input form 변경 체크
  const onChange = (e: any) => {
    const { value, name } = e.target;
    dispatch(
      changeFieldLogin({
        form: 'login',
        key: name,
        value,
      }),
    );
  };

  // 제출 버튼
  const onSubmit = (e: any) => {
    e.preventDefault();
    const { email, password } = form;

    dispatch(login({ email, password }));
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
  }, [auth, authError, dispatch]);

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
    dispatch(initializeLoginForm('login'));
  }, [dispatch]);

  return (
    <AuthPageContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <main>
        <form onSubmit={onSubmit}>
          <InputContainer>
            <p>이메일</p>
            <input
              name="email"
              type="text"
              placeholder="아이디(이메일)"
              onChange={onChange}
              value={form.email || ''}
            />
            <p>비밀번호</p>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChange}
              value={form.password || ''}
            />
          </InputContainer>
          <Button>로그인</Button>
        </form>
      </main>
    </AuthPageContainer>
  );
};

export default LoginPage;

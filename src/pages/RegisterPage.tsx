import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../reducers';
import { changeField, initializeForm, register } from '../reducers/auth';
import { check } from '../reducers/user';
import Button from '../components/Common/Button';

import {
  InputContainer,
  RegisterText,
  NextButton,
} from '../components/Auth/styles';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { useCallback } from 'react';

const RegisterPage = () => {
  const [loginPageNum, setLoginPageNum] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(
    ({ auth, user }: RootState) => ({
      form: auth.register,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    }),
  );

  const onNextPage = useCallback(() => {
    const nextPage = loginPageNum + 1;
    setLoginPageNum(nextPage);
  }, [loginPageNum]);

  const onChange = useCallback((e: any) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  }, []);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
    const {
      email,
      password,
      passwordConfirm,
      phoneNum,
      birthday,
      userId,
      sex,
    } = form;

    if (password !== passwordConfirm) {
      return;
    }
    dispatch(register({ email, password, phoneNum, birthday, userId, sex }));
  }, []);

  // 회원가입 성공 / 실패
  useEffect(() => {
    if (authError) {
      return;
    }
    if (auth) {
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

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
  }, [user]);

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <>
      <Header pathname="/auth">
        <LeftIcon />
        <h3>회원 가입</h3>
        <p></p>
      </Header>
      {loginPageNum === 1 ? (
        <main className="register-main">
          <RegisterText>
            만나서 반가워요!
            <br />
            아이디와 비밀번호를
            <br />
            설정해주세요.
          </RegisterText>
          <InputContainer>
            <input
              type="text"
              name="email"
              placeholder="아이디(이메일)"
              onChange={onChange}
              value={form.email || ''}
            />
            <input
              type="password"
              name="password"
              placeholder="패스워드"
              onChange={onChange}
              value={form.password || ''}
            />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="패스워드 확인"
              onChange={onChange}
              value={form.passwordConfirm || ''}
            />
          </InputContainer>
          <NextButton onClick={onNextPage}>
            <p>다음</p>
          </NextButton>
        </main>
      ) : loginPageNum === 2 ? (
        <main className="register-main">
          <RegisterText>
            휴대폰 번호를
            <br />
            입력해주세요.
          </RegisterText>
          <InputContainer>
            <input
              type="text"
              name="phoneNum"
              placeholder="휴대폰 번호"
              onChange={onChange}
              value={form.phoneNum || ''}
            />
          </InputContainer>
          <NextButton onClick={onNextPage}>
            <p>다음</p>
          </NextButton>
        </main>
      ) : loginPageNum === 3 ? (
        <main className="register-main">
          <RegisterText>
            생년월일을
            <br />
            입력해주세요.
          </RegisterText>
          <InputContainer>
            <input
              type="text"
              name="birthday"
              placeholder="생년월일 ex) 940825"
              onChange={onChange}
              value={form.birthday || ''}
            />
            <NextButton onClick={onNextPage}>
              <p>다음</p>
            </NextButton>
          </InputContainer>
        </main>
      ) : loginPageNum === 4 ? (
        <main className="register-main">
          <RegisterText>이름을 입력해주세요.</RegisterText>
          <InputContainer>
            <input
              type="text"
              name="userId"
              placeholder="이름"
              onChange={onChange}
              value={form.userId || ''}
            />
          </InputContainer>
          <NextButton onClick={onNextPage}>
            <p>다음</p>
          </NextButton>
        </main>
      ) : (
        <main className="register-main">
          <RegisterText>
            성별을
            <br />
            선택해주세요.
          </RegisterText>
          <form onSubmit={onSubmit}>
            <InputContainer>
              <input
                type="text"
                name="sex"
                placeholder="남/여"
                onChange={onChange}
                value={form.sex || ''}
              />
              <Button>가입하기</Button>
            </InputContainer>
          </form>
        </main>
      )}
    </>
  );
};

export default RegisterPage;

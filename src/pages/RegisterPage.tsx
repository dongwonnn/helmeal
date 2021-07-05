import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../reducers';
import {
  changeFieldRegister,
  initializeRegisterForm,
  register,
} from '../reducers/auth';
import { check } from '../reducers/user';

import {
  InputContainer,
  RegisterText,
  NextButton,
  RegisterPageContainer,
  SubmitButton,
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

  const onChange = (e: any) => {
    const { value, name } = e.target;
    dispatch(
      changeFieldRegister({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e: any) => {
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
  };

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
    dispatch(initializeRegisterForm('register'));
  }, [dispatch]);

  return (
    <>
      <RegisterPageContainer>
        <Header pathname="/auth">
          <LeftIcon />
          <h3>회원 가입</h3>
          <p></p>
        </Header>
        {loginPageNum === 1 ? (
          <>
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
          </>
        ) : loginPageNum === 2 ? (
          <>
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
          </>
        ) : loginPageNum === 3 ? (
          <>
            <RegisterText>
              생년월일을
              <br />
              입력해주세요.
            </RegisterText>
            <InputContainer>
              <input
                type="text"
                name="birthday"
                placeholder="ex) 940825"
                onChange={onChange}
                value={form.birthday || ''}
              />
            </InputContainer>
            <NextButton onClick={onNextPage}>
              <p>다음</p>
            </NextButton>
          </>
        ) : loginPageNum === 4 ? (
          <>
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
          </>
        ) : (
          <>
            <RegisterText>
              성별을
              <br />
              입력해주세요.
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
              </InputContainer>
              <SubmitButton>
                <p>가입하기</p>
              </SubmitButton>
            </form>
          </>
        )}
      </RegisterPageContainer>
    </>
  );
};

export default RegisterPage;

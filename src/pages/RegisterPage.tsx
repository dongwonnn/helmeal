import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../reducers';
import { changeField, initializeForm, register } from '../reducers/auth';
import { check } from '../reducers/user';

const RegisterPage = () => {
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

  const onChange = (e: any) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const { userId, email, password, passwordConfirm } = form;

    if (password !== passwordConfirm) {
      return;
    }
    dispatch(register({ userId, email, password }));
  };

  // 회원가입 성공 / 실패
  useEffect(() => {
    if (authError) {
      alert('회원가입 실패');
      return;
    }
    if (auth) {
      alert('회원가입 성공');
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
    <div className="registerPage">
      <main className="register-main">
        <div className="register-content">
          <p>회원정보를 입력해주세요</p>
          <form onSubmit={onSubmit}>
            <div className="register-content">
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
              <input
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                onChange={onChange}
                value={form.passwordConfirm || ''}
              />
              <input
                type="text"
                name="phoneNum"
                placeholder="휴대폰 번호"
                onChange={onChange}
                value={form.phoneNum || ''}
              />
            </div>
            <div>
              <button className="register-submit">동의하고 가입하기</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;

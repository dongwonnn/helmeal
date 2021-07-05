import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 6fr 4fr;
`;
export const LogoContainer = styled.div`
  svg {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 420px;
    width: 38.66%;
  }
`;

export const LoginButtonGroup = styled.div`
  margin: 0 6.4%;
`;

export const LoginButtonContainer = styled.div`
  max-width: 892.95px;
  margin: 0 auto;
  margin-bottom: 8px;

  border-radius: 8px;
  background-color: black;

  p {
    color: white;
    padding: 17px 0;
    text-align: center;
    font-weight: bold;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
  p {
    font-size: 16px;
    font-weight: bold;
  }

  input {
    border: none;
    background-color: #ffffff;
    border: 0.5px #cccccc solid;
    margin-top: 13.328px;
    padding: 15px;
    margin-bottom: 10px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const RegisterText = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.5px;

  color: #1d1d1d;
  margin: 24px;
`;

export const NextButton = styled.div`
  max-width: 420px;
  width: 100%;
  border: none;
  display: block;
  background-color: white;
  padding: 23px 24px 34px 24px;

  p {
    background-color: #fc5c42;
    border-radius: 8px;
    text-align: center;
    color: white;
    padding: 17px 7.63px;
    font-weight: bold;

    font-size: 1.06rem;
    line-height: 22px;
    text-align: center;
    letter-spacing: -0.408px;
  }
`;

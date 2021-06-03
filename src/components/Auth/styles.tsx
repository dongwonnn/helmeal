import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1024px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 6fr 4fr;
`

export const LogoContainer = styled.div`
  svg {
    position: fixed;
    top: 31.7%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 400px;
    width: 38.66%;
  }
`

export const LoginButtonGroup = styled.div`
  margin: 0 6.4%;
`

export const LoginButtonContainer= styled.div`
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
`
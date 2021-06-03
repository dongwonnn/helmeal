import React from 'react';
import {TermsOfServiceContainer } from './styles'

const TermsOfService = () => {
  return (
    <TermsOfServiceContainer>
      <p>
        로그인하시면 헬밀의
        <a href="https://www.notion.so/0d1cde2a6a434fc985cb9a1a7e192d2f">
          개인정보처리방침
        </a>
        및
        <a href="https://www.notion.so/0c65aea4959e43f9a9712dd7ad37f6e9">
          이용약관
        </a>
        에
        <br />
        동의하는 것으로 간주합니다.
      </p>
    </TermsOfServiceContainer>
  );
};

export default TermsOfService;

import React from 'react';
import { CardContiner, PayPoliceContent } from './styles';

const PayPolice = () => {
  return (
    <CardContiner>
      <PayPoliceContent>
        <ul>
          <li>
            <p>헬밀 약관 동의</p>
            <a href="https://www.notion.so/df0429a077704a5a86c620b68b45e6ab">
              내용 보기
            </a>
          </li>
          <li>
            <p>개인정보 수집 및 이용에 대한 안내</p>
            <a href="https://www.notion.so/86eceddf4ca64879a0803737561a6c0a">
              내용 보기
            </a>
          </li>
          <li>
            <p>구매조건 및 개인정보 제3자 제공</p>
            <a href="https://www.notion.so/3-521ac58df9734587b083d93e3939bf40">
              내용 보기
            </a>
          </li>
        </ul>
        <div>
          위 상품의 구매조건을 확인하였으며, 결제 및 개인정보 제3자 제공에 모두
          동의합니다.
        </div>
      </PayPoliceContent>
    </CardContiner>
  );
};

export default PayPolice;

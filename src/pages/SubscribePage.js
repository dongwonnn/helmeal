import React, { useState } from 'react';
import SubscribeDropdown from '../components/Subscribe/SubscribeDropdown';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import './SubscribePage.scss';
import StartRoutine from '../components/Common/StartRoutine';

const SubscribePage = () => {
  const [canSelectOption, setCanSelectOption] = useState(true);

  return (
    <div className="SubscribePage">
      {canSelectOption ? (
        <>
          <Header>
            <LeftIcon />
            <h3>구독 옵션 선택</h3>
            <p></p>
          </Header>
          <SubscribeDropdown setCanSelectOption={setCanSelectOption} />
        </>
      ) : (
        <>
          <Header>
            <LeftIcon />
            <h3>구독 옵션 선택</h3>
            <p>선택취소</p>
          </Header>
          <div className="OrderInfoContainer">
            <OrderInfos />
            <TotalPay />
          </div>
          <StartRoutine />
        </>
      )}
    </div>
  );
};

export default SubscribePage;

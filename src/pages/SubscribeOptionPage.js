import React, { useState } from 'react';
import SubscribeDropdown from '../components/Subscribe/SubscribeDropdown';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import './SubscribeOptionPage.scss';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';

const SubscribeOptionPage = () => {
  const [canSelectOption, setCanSelectOption] = useState(true);

  return (
    <div className="SubscribeOptionPage">
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
          <div className="ButtonContainer">
            <Link to="/subscribe">
              <Button>바로 구매</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SubscribeOptionPage;

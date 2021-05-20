import React from 'react';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Button from '../components/Common/Button';
import Header from '../components/Common/Header';
import OrderInfos from '../components/Subscribe/OrderInfos';

import './SubscribeCompletePage.scss';

const SubscribeCompletePage = () => {
  return (
    <div className="SubscribeCompletePage">
      <Header>
        <LeftIcon />
        <h3>구독 완료</h3>
        <p></p>
      </Header>
      <div className="SubscribeCompleteContainer">
        <div className="SubscribeCompleteMesseg">
          <h2>
            Enjoy Helmeal, <br />
            and Keep the TRACK
          </h2>
          <p className="MesseageTitle">헬밀 프로틴</p>
          <p className="MesseageDetail">구독이 완료되었습니다</p>
        </div>
        <div className="OrderInfo">
          <h4>주문내역</h4>
          <OrderInfos />
        </div>
      </div>
      <div className="ButtonContainer">
        <Button>확인</Button>
      </div>
    </div>
  );
};

export default SubscribeCompletePage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Button from '../components/Common/Button';
import Header from '../components/Common/Header';
import OrderInfos from '../components/Subscribe/OrderInfos';
import { useLocation } from 'react-router';

import './SubscribeCompletePage.scss';

const SubscribeCompletePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="SubscribeCompletePage">
      <Header pathname='/subscribe'>
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
          <OrderInfos>
            <h4>배송지</h4>
            <p className="AddrssDetail">서울시 강남구</p>
          </OrderInfos>
        </div>
      </div>
      <div className="ButtonContainer">
        <Link to="/">
          <Button>확인</Button>
        </Link>
      </div>
    </div>
  );
};

export default SubscribeCompletePage;

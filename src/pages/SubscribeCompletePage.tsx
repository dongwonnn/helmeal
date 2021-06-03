import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Button from '../components/Common/Button';
import Header from '../components/Common/Header';
import OrderInfos from '../components/Subscribe/OrderInfos';
import { useLocation } from 'react-router';

import { DelivertAddress, MesseageDetail, MesseageTitle, OrderInfo, SubscribeCompleteContainer, SubscribeCompleteMesseg } from '../components/Subscribe/styles';

const SubscribeCompletePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Header pathname='/subscribe'>
        <LeftIcon />
        <h3>구독 완료</h3>
        <p></p>
      </Header>
      <SubscribeCompleteContainer>
        <SubscribeCompleteMesseg>
          <h2>
            Enjoy Helmeal, <br />
            and Keep the TRACK
          </h2>
          <MesseageTitle>헬밀 프로틴</MesseageTitle>
          <MesseageDetail>구독이 완료되었습니다</MesseageDetail>
        </SubscribeCompleteMesseg>
        <OrderInfo>
          <h4>주문내역</h4>
          <OrderInfos>
            <DelivertAddress>배송지</DelivertAddress>
            <p className="AddrssDetail">서울시 강남구</p>
          </OrderInfos>
        </OrderInfo>
      </SubscribeCompleteContainer>
      <div className="ButtonContainer">
        <Link to="/">
          <Button>확인</Button>
        </Link>
      </div>
    </div>
  );
};

export default SubscribeCompletePage;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import Button from '../components/Common/Button';
import Header from '../components/Common/Header';
import OrderInfos from '../components/Subscribe/OrderInfos';
import { useLocation } from 'react-router';

import {
  AddrssDetail,
  DelivertAddress,
  MesseageDetail,
  MesseageTitle,
  OrderInfo,
  SubscribeCompleteContainer,
  SubscribeCompleteMesseg,
} from '../components/Subscribe/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

const SubscribeCompletePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { detailAddress } = useSelector(({ address }: RootState) => ({
    detailAddress: address.detailAddress,
  }));

  return (
    <>
      <Header pathname="/subscribe">
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
            <AddrssDetail>{detailAddress}</AddrssDetail>
          </OrderInfos>
        </OrderInfo>
      </SubscribeCompleteContainer>
      <div>
        <Link to="/">
          <Button>확인</Button>
        </Link>
      </div>
    </>
  );
};

export default SubscribeCompletePage;

import React, { useEffect, useMemo } from 'react';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';
import { getPayForm } from '../utils/getPayForm';
import PayWayContainer from '../components/Subscribe/PayWayContainer';
import Address from '../components/Subscribe/Address';
import { useLocation } from 'react-router';
import {
  PayButtonContainer,
  SubscribeContainer,
  SubscribePageContainer,
} from '../components/Subscribe/styles';
import { RootState } from '../reducers';

const SubscribePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { dateInfoPrice, subscribeTermPrice } = useSelector(
    ({ option }: RootState) => ({
      dateInfoPrice: option.dateInfoPrice,
      subscribeTermPrice: option.subscribeTermPrice,
    }),
  );

  const totalPay = useMemo(
    () => getPayForm(parseInt(dateInfoPrice) + parseInt(subscribeTermPrice)),
    [dateInfoPrice, subscribeTermPrice],
  );

  return (
    <>
      <Header pathname="/subscribe-option">
        <LeftIcon />
        <h3>구독하기</h3>
        <p></p>
      </Header>
      <SubscribePageContainer>
        <SubscribeContainer>
          <h4>배송지 정보</h4>
          <Address />

          <h4>주문내역</h4>
          <OrderInfos />

          <h4>결제 수단</h4>
          <PayWayContainer />

          <TotalPay />
        </SubscribeContainer>
        <PayButtonContainer>
          <Link to="/subscribe-complete">
            <Button>{totalPay}원 결제하기</Button>
          </Link>
        </PayButtonContainer>
      </SubscribePageContainer>
    </>
  );
};

export default SubscribePage;

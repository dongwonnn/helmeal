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
import { DisableButtonContainer } from '../components/Common/styles';
import { RootState } from '../reducers';
import PayPolice from '../components/Subscribe/PayPolice';
import { useState } from 'react';

const SubscribePage = () => {
  const [payCheck, setPayCheck] = useState(false);
  const [addressCheck, setAddressCheck] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { mainAddress } = useSelector(({ address }: RootState) => ({
    mainAddress: address.mainAddress,
  }));

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
          <Address setAddressCheck={setAddressCheck} />

          <h4>주문내역</h4>
          <OrderInfos />

          <h4>결제 수단</h4>
          <PayWayContainer setPayCheck={setPayCheck} />

          <TotalPay />

          <h4>구매조건/약관 및 개인정보 이용 동의</h4>
          <PayPolice />
        </SubscribeContainer>

        <PayButtonContainer>
          {payCheck && mainAddress ? (
            <Link to="/subscribe-complete">
              <Button>{totalPay}원 결제하기</Button>
            </Link>
          ) : (
            <DisableButtonContainer>
              <p>{totalPay}원 결제하기</p>
            </DisableButtonContainer>
          )}
        </PayButtonContainer>
      </SubscribePageContainer>
    </>
  );
};

export default SubscribePage;

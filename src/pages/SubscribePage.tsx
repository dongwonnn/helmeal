import React, { useEffect, useMemo, useCallback } from 'react';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
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
import { getDeliveryDate } from '../utils/getDate';
import { setOrderList } from '../reducers/orderList';

const SubscribePage = () => {
  const [payCheck, setPayCheck] = useState(false);
  const [addressCheck, setAddressCheck] = useState(false);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 프로틴 종류, 날짜, 구독 기간
  const { proteinInfo, dateInfo, subscribeTerm } = useSelector(
    ({ option }: RootState) => ({
      proteinInfo: option.proteinInfo,
      dateInfo: option.dateInfo,
      subscribeTerm: option.subscribeTerm,
    }),
  );

  // 주소
  const { mainAddress } = useSelector(({ address }: RootState) => ({
    mainAddress: address.mainAddress,
  }));

  // 구독 기간별 금액
  const { dateInfoPrice, subscribeTermPrice } = useSelector(
    ({ option }: RootState) => ({
      dateInfoPrice: option.dateInfoPrice,
      subscribeTermPrice: option.subscribeTermPrice,
    }),
  );

  // 결제 금액
  const totalPay = useMemo(
    () => getPayForm(parseInt(dateInfoPrice) + parseInt(subscribeTermPrice)),
    [dateInfoPrice, subscribeTermPrice],
  );

  const orderList = [
    {
      proteinInfo,
      dateInfo,
      subscribeTerm,
      mainAddress,
      deliveryPeriod: getDeliveryDate(subscribeTerm),
      totalPay,
    },
  ];

  const onSubscribeComplete = useCallback(() => {
    dispatch(setOrderList(orderList));
  }, [dispatch]);

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
          <OrderInfos
            proteinInfo={proteinInfo}
            dateInfo={dateInfo}
            subscribeTerm={subscribeTerm}
          />

          <h4>결제 수단</h4>
          <PayWayContainer setPayCheck={setPayCheck} />

          <TotalPay />

          <h4>구매조건/약관 및 개인정보 이용 동의</h4>
          <PayPolice />
        </SubscribeContainer>

        <PayButtonContainer onClick={onSubscribeComplete}>
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

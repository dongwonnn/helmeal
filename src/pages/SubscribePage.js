import React, { useState } from 'react';
import Header from '../components/Common/Header';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { useSelector } from 'react-redux';

import './SubscribePage.scss';
import Button from '../components/Common/Button';
import OrderInfos from '../components/Subscribe/OrderInfos';
import TotalPay from '../components/Subscribe/TotalPay';
import { getPayForm } from '../utils/getPayForm';
import PayWayContainer from '../components/Subscribe/PayWayContainer';
import AddressContainer from '../components/Subscribe/AddressContainer';

const SubscribePage = () => {
  const { dateInfoPrice, subscribeTermPrice } = useSelector(({ option }) => ({
    dateInfoPrice: option.dateInfoPrice,
    subscribeTermPrice: option.subscribeTermPrice,
  }));

  const [totalPay] = useState(
    getPayForm(parseInt(dateInfoPrice) + parseInt(subscribeTermPrice)),
  );

  return (
    <div className="SubscribePage">
      <Header>
        <LeftIcon />
        <h3>구독하기</h3>
        <p></p>
      </Header>
      <div className="SubscribeContainer">
        <h4>배송지 정보</h4>
        <AddressContainer />

        <div className="OrderInfo">
          <h4>주문내역</h4>
          <OrderInfos />
        </div>

        <h4>결제 수단</h4>
        <PayWayContainer />

        <TotalPay />
      </div>
      <div className="ButtonContauner">
        <Button>{totalPay}원 결제하기</Button>
      </div>
    </div>
  );
};

export default SubscribePage;

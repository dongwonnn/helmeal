import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Common/Header';
import OrderInfos from '../components/Subscribe/OrderInfos';
import {
  AddrssDetail,
  DelivertAddress,
  OrderInfo,
  OrderInfoContainer,
} from '../components/Subscribe/styles';
import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { RootState } from '../reducers';

const OrderHistoryPage = () => {
  const { detailAddress } = useSelector(({ address }: RootState) => ({
    detailAddress: address.detailAddress,
  }));

  return (
    <>
      <Header pathname="/profile">
        <LeftIcon />
        <h3>주문 내역</h3>
        <p></p>
      </Header>
      <OrderInfoContainer>
        <OrderInfo>
          <OrderInfos>
            <DelivertAddress>배송지</DelivertAddress>
            <AddrssDetail>{detailAddress}</AddrssDetail>
          </OrderInfos>
        </OrderInfo>
      </OrderInfoContainer>
    </>
  );
};

export default OrderHistoryPage;

import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Common/Header';
import OrderInfos from '../components/Subscribe/OrderInfos';
import {
  AddrssDetail,
  DelivertAddress,
  OrderInfo,
  OrderInfoContainer,
  SubscribeCompleteMesseg,
  MesseageTitle,
  MesseageDetail,
} from '../components/Subscribe/styles';

import { OrderHistoryButtonContainer } from '../components/Profile/styles';
import Button from '../components/Common/Button';
import { Link } from 'react-router-dom';

import { ReactComponent as LeftIcon } from '../assets/images/LeftIcon.svg';
import { RootState } from '../reducers';

const OrderHistoryPage = () => {
  const { orderList } = useSelector(({ orderList }: RootState) => ({
    orderList: orderList.orderList,
  }));

  const { mainAddress, detailAddress } = useSelector(
    ({ address }: RootState) => ({
      mainAddress: address.mainAddress,
      detailAddress: address.detailAddress,
    }),
  );

  return (
    <>
      <Header pathname="/profile">
        <LeftIcon />
        <h3>주문 내역</h3>
        <p></p>
      </Header>
      {orderList.length > 0 ? (
        <>
          {orderList.reverse().map((list, index) => (
            <OrderInfoContainer key={index}>
              <OrderInfo>
                <OrderInfos
                  proteinInfo={list.proteinInfo}
                  dateInfo={list.dateInfo}
                  subscribeTerm={list.subscribeTerm}
                >
                  <DelivertAddress>배송지</DelivertAddress>
                  <AddrssDetail>{mainAddress}</AddrssDetail>
                </OrderInfos>
              </OrderInfo>
            </OrderInfoContainer>
          ))}
          <OrderHistoryButtonContainer>
            <Link to="/profile">
              <Button>확인</Button>
            </Link>
          </OrderHistoryButtonContainer>
        </>
      ) : (
        <SubscribeCompleteMesseg>
          <h2>
            Enjoy Helmeal, <br />
            and Keep the TRACK
          </h2>
          <MesseageTitle>헬밀 프로틴</MesseageTitle>
          <MesseageDetail>구독을 시작해보세요</MesseageDetail>
          <Link to="/detail">
            <Button>루틴 시작하기</Button>
          </Link>
        </SubscribeCompleteMesseg>
      )}
    </>
  );
};

export default OrderHistoryPage;

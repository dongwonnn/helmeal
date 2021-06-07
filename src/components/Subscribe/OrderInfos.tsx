import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { getDeliveryDate } from '../../utils/getDate';

import { AddressInfo, DateInfo, DeliveryInfo, OrderInfo, OrderInfosContainer } from './styles';

const OrderInfos:FC = ({ children }) => {
  const { proteinInfo, dateInfo, subscribeTerm } = useSelector(
    ({ option } : RootState) => ({
      proteinInfo: option.proteinInfo,
      dateInfo: option.dateInfo,
      subscribeTerm: option.subscribeTerm,
    }),
  );
  return (
    <OrderInfosContainer>
      <h2>헬밀 프로틴</h2>
      <OrderInfo>{proteinInfo}</OrderInfo>
      <OrderInfo>{dateInfo}</OrderInfo>
      <OrderInfo>{subscribeTerm}</OrderInfo>
      <DeliveryInfo>
        <h4>배송 시작일</h4>
        <DateInfo>{getDeliveryDate(subscribeTerm)}</DateInfo>
      </DeliveryInfo>
      <AddressInfo>{children}</AddressInfo>
    </OrderInfosContainer>
  );
};

export default OrderInfos;

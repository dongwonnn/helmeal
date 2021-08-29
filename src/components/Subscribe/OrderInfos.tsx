import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { getDeliveryDate } from 'utils/getDate';

import {
  AddressInfo,
  DateInfo,
  DeliveryInfo,
  OrderInfo,
  OrderInfosContainer,
} from './styles';

interface OrderInfosProps {
  proteinInfo: string;
  dateInfo: string;
  subscribeTerm: string;
}

const OrderInfos: FC<OrderInfosProps> = ({
  children,
  proteinInfo,
  dateInfo,
  subscribeTerm,
}) => {
  return (
    <OrderInfosContainer>
      <h2>헬밀 프로틴</h2>
      <OrderInfo>{proteinInfo}</OrderInfo>
      <OrderInfo>{dateInfo}</OrderInfo>
      <OrderInfo>{subscribeTerm}</OrderInfo>
      <DeliveryInfo>
        <h4>구독 기간</h4>
        <DateInfo>{getDeliveryDate(subscribeTerm)}</DateInfo>
      </DeliveryInfo>
      <AddressInfo>{children}</AddressInfo>
    </OrderInfosContainer>
  );
};

export default OrderInfos;

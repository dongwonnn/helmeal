import React from 'react';
import { useSelector } from 'react-redux';
import { getDeliveryDate } from '../../utils/getDeliveryDate';

import './OrderInfos.scss';

const OrderInfos = () => {
  const { proteinInfo, dateInfo, subscribeTerm } = useSelector(
    ({ option }) => ({
      proteinInfo: option.proteinInfo,
      dateInfo: option.dateInfo,
      subscribeTerm: option.subscribeTerm,
    }),
  );
  return (
    <div className="OrderInfos">
      <h2>헬밀 프로틴</h2>
      <p className="OrderInfo">{proteinInfo}</p>
      <p className="OrderInfo">{dateInfo}</p>
      <p className="OrderInfo">{subscribeTerm}</p>
      <div className="DeliveryInfo">
        <h4>배송 시작일</h4>
        <p className="DateInfo">{getDeliveryDate(subscribeTerm)}</p>
      </div>
    </div>
  );
};

export default OrderInfos;

import React from 'react';
import './OrderInfos.scss';

const OrderInfos = ({ proteinInfo, dateInfo, subscribeTerm }) => {
  return (
    <div className="OrderInfos">
      <h2>헬밀 프로틴</h2>
      <p className="OrderInfo">{proteinInfo}</p>
      <p className="OrderInfo">{dateInfo}</p>
      <p className="OrderInfo">{subscribeTerm}</p>
      <div className="DeliveryInfo">
        <h4>배송 시작일</h4>
        <p className="DateInfo">2021년 4월 26일~2021년 5월 1일</p>
      </div>
    </div>
  );
};

export default OrderInfos;

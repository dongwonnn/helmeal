import React, { useState } from 'react';
import './TotalPay.scss';
import { useSelector } from 'react-redux';
import { getPayForm } from '../../utils/getPayForm';

const TotalPay = () => {
  const { dateInfoPrice, subscribeTermPrice } = useSelector(({ option }) => ({
    dateInfoPrice: option.dateInfoPrice,
    subscribeTermPrice: option.subscribeTermPrice,
  }));

  const [totalPay] = useState(
    getPayForm(parseInt(dateInfoPrice) + parseInt(subscribeTermPrice)),
  );

  return (
    <div className="TotalPay">
      <div className="TotalPayContent">
        <div className="TotalPayment">
          <p className="TotalText">총 결제 금액</p>
          <p className="TotalPay">{totalPay}원</p>
        </div>
        <div className="DeliveryFee">
          <p>배송비</p>
          <p>무료</p>
        </div>
      </div>
    </div>
  );
};

export default TotalPay;

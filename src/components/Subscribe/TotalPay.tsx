import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { getPayForm } from '../../utils/getPayForm';
import { TotalPayContent, TotalPayContiner } from './styles';

const TotalPay = () => {
  const { dateInfoPrice, subscribeTermPrice } = useSelector(({ option } : RootState) => ({
    dateInfoPrice: option.dateInfoPrice,
    subscribeTermPrice: option.subscribeTermPrice,
  }));

  const totalPay = useMemo(
    () => getPayForm(parseInt(dateInfoPrice) + parseInt(subscribeTermPrice)),
    [dateInfoPrice, subscribeTermPrice],
  );

  return (
    <TotalPayContiner>
      <TotalPayContent>
        <div>
          <p className="TotalText">총 결제 금액</p>
          <p className="TotalPay">{totalPay}원</p>
        </div>
        <div>
          <p>배송비</p>
          <p>무료</p>
        </div>
      </TotalPayContent>
    </TotalPayContiner>
  );
};

export default TotalPay;
